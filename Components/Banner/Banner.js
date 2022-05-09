import styles from "./banner.module.css";
import Link from "next/link";

const Banner = ({ buttonText, buttonHandler})=>{
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.title1}>Pic...</span>
            <span className={styles.title2}>Tionary</span>
          </h1>
          <p className={styles.subTitle}>Discover the world through the lense!</p>
          <div className={styles.buttonWrapper}>
            <Link className={styles.button} href="/finder">
              <a>{buttonText}</a>
            </Link>
          </div>
        </div>
      );
}

export default Banner;