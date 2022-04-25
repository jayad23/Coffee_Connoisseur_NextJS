import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import styles from '../styles/Home.module.css'

const { Container, Main } = styles;

export default function Home() {

  const buttonBannerHandler = ()=>{
    alert("More cafes coming your way!")
  }

  return (
    <div className={Container}>
      <Header/>
      <main className={Main}>
        <Banner 
          buttonText="View cafes nearby"
          buttonHandler={buttonBannerHandler}
        />
      </main>
    </div>
  )
}
