const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT ;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order",async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
    
        const options = req.body;
        const order = await razorpay.orders.create(options);
    
        if(!order) return res.status(500).send("Some error occured");
    
        res.json(order);
    } catch (error) {

        console.log(error);
        res.status(500).send(error);
        
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


