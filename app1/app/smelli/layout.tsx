import React from "react";
import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Sniffers</nav>
      <main className={styles.main}>
        {children}
        <div className="video-container">
          <video src={"./f4.mp4"} controls autoPlay loop muted />
        </div>
        <h1>ahahah</h1>
      </main>
    </>
  );
}
