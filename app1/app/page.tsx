import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

// Image Import
import sw from "w.gif";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Howdy Doody</h1>
      <Image src={sw} alt="sweatydrink" />
      <p>"yahahhahahah" "hohohohoh"</p>
    </main>  
  );
}
