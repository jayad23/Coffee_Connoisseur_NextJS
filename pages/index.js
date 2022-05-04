import { useEffect, useState } from 'react';
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card/Card';
import Image from 'next/image';

import stData from "../data/coffee-stores.json";

//this is the fuction that is used to pre-render data which comes from the server
export async function getStaticProps (context){
  return {
    props: {
      stores_data: stData,

    },
  }
}

export default function Home({ stores_data }) {
  const [ data, setData ] = useState([]);
  const buttonBannerHandler = ()=>{
    alert("More cafes coming your way!")
  }

  useEffect(()=>{
    const request = async ()=>{
      fetch("https://api.foursquare.com/v2/venues/search?ll=41.8781,-87.6298&client_id=EDZQ5Z4XLJSWO0OBCOMY4VTHMSALIMZPMZF5LK35CZRWRLTL&client_secret=NNSVARPUHUKZEHQEYVJTO4HQRWYQDLXPBGTWIWUXZDSUNNKI&v=20210525")
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
    }
    request();
  }, [])
  console.log(data)
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          buttonHandler={buttonBannerHandler}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero image"
          />
        </div>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.heading2}>Stores near me</h2>
          <div className={styles.cardLayout} style={{margin: "20px"}}>
              The stores will be displayed in this area.
          </div>
        </div>

        <div className={styles.cardLayout}>
          {
            stores_data.map((store)=>{
              return (
                <Card
                  key={store.id}
                  name={store.name}
                  linkTo={`/coffee-store/${store.id}`}
                  image={store.imgUrl}
                  className={styles.card}
                />
              )
            })
          }
          
        </div>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.heading2}>Toronto stores</h2>
          <div className={styles.cardLayout}>
              More stores on this area.
          </div>
        </div>
        
      </main>
    </div>
  );
}
