import { useState } from "react";
import { useRouter } from "next/router";
import { CoffeeStoreComponent } from "../../Components/CofeeStoreComponent/CoffeStoreComponent";
import stData from "../../data/coffee-stores.json";

export function getStaticProps({ params }){
  return {
    props: {
      store_data: stData.find((store)=> store.id === parseInt(params.id))
    }
  }
}

export function getStaticPaths(){
  return {
    paths: stData.map(store => ({ params: { id: store.id.toString()}})),
    fallback: true,
  }
}

const CoffeeStore = ({ store_data})=>{
  const [count, setCount ] = useState(0);
  const [ dislike, setDislike ] = useState(false);
  const [ complaint, setComplaint ] = useState("");
  const router = useRouter();

  if(router.isFallback){
    return (
      <div><h1>Loading...</h1></div>
    )
  };

  function countHandler(){
    if(count === 1){
      setCount(count);
    }else{
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    < CoffeeStoreComponent 
        store_data = {store_data}
        count = {count}
        countHandler = {countHandler}
        dislike = {dislike}
        setDislike = {setDislike}
        complaint={complaint}
        setComplaint={setComplaint}
    />
  )
}

export default CoffeeStore;
