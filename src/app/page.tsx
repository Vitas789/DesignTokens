"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  const theme = useState('default');
  return (
    <main className={styles.main}>
      {/* <button className={styles.button}>Test</button> */}
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={'/IMG.png'} layout="fill" alt="zavod"/>
        </div>
        <span>Трубопрокатный завод</span>
        <button>Подробнее</button>
      </div>
    </main>
  );
}
