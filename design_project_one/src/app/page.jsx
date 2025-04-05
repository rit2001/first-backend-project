import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products.</h1>
      <p className={styles.desc}>
        Turning your Idea into Reality.We bring together the teams from thr global tech industry.
      </p>
      <Button url="/portfolio" text="SEE Our Works"/>
    </div>
      <div className="styles.item">
      <Image src="/hero.png" alt="Hero Image" className={styles.img} width={500} height={300} />
      </div>
    </div>
  );
}
