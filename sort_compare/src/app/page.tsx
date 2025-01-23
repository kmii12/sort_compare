// import Image from "next/image";
import Link from "next/Link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p></p>
      <Link href="../">Bubble Sort</Link>
      <Link href="../">Selection Sort</Link>
      <Link href="../">Insertion Sort</Link>
      <Link href="../">Merge Sort</Link>
      <Link href="../">組み込みオブジェクトのSort</Link>
    </div>
  );
}
