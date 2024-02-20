"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  const theme = useState('default');
  return (
    <main className={`${styles.main} ${theme}`}>
      <button className={styles.button}>Test</button>
    </main>
  );
}
