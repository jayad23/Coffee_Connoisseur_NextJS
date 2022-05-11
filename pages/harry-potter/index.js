import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card.js";
import styles from "../../styles/Home.module.css";
const backUpImage = "https://i.guim.co.uk/img/media/1d4b16d4c6703e9bec9174f1cadc278026de0647/0_75_1280_768/master/1280.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d036928c5974e9e8bfd87be5dcf37dd7";
export default function HarryPotter (){

    const [ sagaData, setSagaData ] = useState([]);
    const [ house, setHouse ] = useState(["slytherin", "gryffindor", "ravenclaw", "hufflepuff"]);
    const [ index, setindex ] = useState(1);
    useEffect(()=>{
        const request = async ()=>{
            const response = await fetch(`/api/handlingRequest?house=${house[index]}`)
            const results = await response.json();
            setSagaData(results);
        }
        request();
    }, [house, index]);
    return (
        <div>
            <div className={styles.cardLayout}>
          {
            sagaData?.map((character)=>{
              return (
                <Card
                  key={character.name}
                  name={character.name}
                  linkTo={`/issue/${character.name}`}
                  image={character.image.length === 0 ? backUpImage : character.image}
                  className={styles.card}
                />
              )
            })
          }
          </div>
        </div>
    )
}