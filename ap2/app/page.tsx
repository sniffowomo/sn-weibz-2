import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Woman Juice</h1>
      <Link href="/about">AboutPage</Link>
      <h2> Big Thaang </h2>
    </main>
  );
}
