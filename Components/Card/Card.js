import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./card.module.css";
const Card = ({ name, image, linkTo })=>{
    return (
        <Link href={linkTo}>
          <a className={styles.cardLink}>
            <div className={cls("glass", styles.container)}>
              <div className={styles.cardHeaderWrapper}>
                <h2 className={styles.cardHeader}>{name}</h2>
              </div>
              <div className={styles.cardImageWrapper}>
                <Image
                  alt={name}
                  className={styles.cardImage}
                  src={image}
                  width={260}
                  height={160}
                />
              </div>
            </div>
          </a>
        </Link>
      );
}

export default Card;