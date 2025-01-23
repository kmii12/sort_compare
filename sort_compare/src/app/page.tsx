// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.flexContainer}>
        <Link className={styles.linkBtn} href={`/BubbleSort`}>
          Bubble Sort
        </Link>
        <Link className={styles.linkBtn} href={`/SelectionSort`}>
          Selection Sort
        </Link>
        <Link className={styles.linkBtn} href={`/InsertionSort`}>
          Insertion Sort
        </Link>
        <Link className={styles.linkBtn} href={`/MergeSort`}>
          Merge Sort
        </Link>
        <Link className={styles.linkBtn} href={`/ObjectSort`}>
          組み込みオブジェクトのSort
        </Link>
      </div>
    </div>
  );
}
