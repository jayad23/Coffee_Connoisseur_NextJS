import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner.js'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card/Card';
import Image from 'next/image';
import { getImagesFn } from '../lib/getImagesFn';
import { objectRequest } from '../lib/searchParameters';


export async function getStaticProps (){ 
  const { photos } = await getImagesFn(objectRequest);
  return {
    props: {
      imagesData: photos,
    },
  }
}

export default function Home({imagesData}) {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <Banner
          buttonText="Search Images"
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
          <h2 className={styles.heading2}>Images of Tigers</h2>
          <div className={styles.cardLayout}>
          {
            imagesData.map((picture)=>{
              return (
                <Card
                  key={picture.id}
                  name={picture.alt}
                  linkTo={`/issue/${picture.id}`}
                  image={picture.src.portrait}
                  className={styles.card}
                />
              )
            })
          }
          </div>
        </div>
        
      </main>
    </div>
  );
}
