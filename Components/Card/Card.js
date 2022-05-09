import { useContext } from "react";
import { StoreContext, Types } from "../../Context/StoreContext";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./card.module.css";
const Card = ({ name, image, linkTo, id })=>{
  const { state, dispatch } = useContext(StoreContext);
    return (
        <Link href={linkTo}>
          <a className={styles.cardLink} onClick={()=> dispatch({ type: Types.ITEM, payload: id })}>
            <div className={cls("glass", styles.container)}>
              <div className={styles.cardHeaderWrapper}>
                <h2 className={styles.cardHeader}>{name}</h2>
              </div>
              <div className={styles.cardImageWrapper}>
                <Image
                  alt={name}
                  className={styles.cardImage}
                  src={image}
                  width={200}
                  height={160}
                />
              </div>
            </div>
          </a>
        </Link>
      );
}

export default Card;