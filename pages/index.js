import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const buttonBannerHandler = ()=>{
    alert("More cafes coming your way!")
  }

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <Banner 
          buttonText="View cafes nearby"
          buttonHandler={buttonBannerHandler}
        />
      </main>
    </div>
  )
}
