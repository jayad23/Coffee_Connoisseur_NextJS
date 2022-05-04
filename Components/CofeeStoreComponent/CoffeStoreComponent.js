import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import cls from "classnames";
import styles from "../../styles/coffee-store.module.css";
import anotherStyles from "../../styles/Home.module.css";

import likeIcon from "../../public/static/like.png";
import dislikeIcon from "../../public/static/dislike.png";

export const CoffeeStoreComponent = ({ store_data, count, dislike, setDislike, countHandler, complaint, setComplaint })=>{
    return (
      <div className={styles.layout}>
        <Head>
            <title>Café: {store_data.name}</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.backToHomeLink}>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </div>
            <div className={styles.nameWrapper}>
              <p className={anotherStyles.heading2}>{store_data.name}</p>
            </div>
            <Image 
              src={store_data.imgUrl} 
              alt={store_data.name}
              width={600}
              height={400}
            />
          </div>
          {
            dislike ?
              <section className={cls("glass", styles.col2)}>
                <form>
                  <label className={styles.text}>Tell us what we can do better:</label>
                  <textarea
                    className={styles.text}
                    spellCheck={true}
                    onChange={(e)=> setComplaint(e.target.value)}
                    value={complaint}
                    style={{position: "relative", width: "100%", height: "202px", lineHeight: "1.5rem", padding: "20px", outline: "none", fontSize: "1.2rem"}}
                  />
                </form>
                <div>
                  <span className={styles.text}>Thank you for your feedback.</span>
                  <div style={{display: "flex", gap:"10px", marginTop: "10px"}}>
                    <button type="submit"
                      className={styles.sendButton}
                      >Send!</button>
                    <button 
                      className={styles.backButton}
                      onClick={()=> setDislike(dislike => !dislike)}>Back</button>
                  </div>
                </div>
              </section>
            :
              <section className={cls("glass", styles.col2)}>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                  <h2 className={styles.text}><span style={{ color:"crimson"}}>Café:</span>: {store_data.name}</h2>
                  <p className={styles.text}><span style={{ color:"crimson"}}>Where:</span>: {store_data.address}</p>
                  <p className={styles.text}><span style={{ color:"crimson"}}>At:</span>: {store_data.neighbourhood}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
                    <span style={{color: "white", fontWeight:"bold"}}>{count} people liked this café.</span>
                    <div style={{display: "flex", gap:"10px"}}>
                        <div className={styles.likeButtonContainer}>
                          <button
                            className={styles.likeButton} 
                            onClick={()=>countHandler()}> { count ? "Liked" : "Like" }  
                          </button> 
                          <Image src={likeIcon} width={20} height={20} alt="like-icon"/> 
                        </div>
                        <div className={styles.likeButtonContainer}>
                          <button
                            className={styles.likeButton} 
                            onClick={()=> setDislike(dislike => !dislike)}>Dislike 
                          </button> 
                          <Image src={dislikeIcon} width={19} height={20} alt="dislike-icon"/> 
                        </div>
                    </div>
                  </div>
                </div>
              </section>
          }
        </div>
      </div>
    )
}