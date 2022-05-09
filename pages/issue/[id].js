import { useState, useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useRouter } from "next/router";
import { CoffeeStoreComponent } from "../../Components/CofeeStoreComponent/CoffeStoreComponent";
import { getImagesFn } from "../../lib/getImagesFn";
import { objectRequest } from "../../lib/searchParameters";

export async function getStaticProps({ params }){
  const { photos } = await getImagesFn(objectRequest);
  const isFound = photos.find((images)=> images.id === parseInt(params.id))
  console.log(isFound)
  return {
    props: {
      generalData: isFound ? isFound : {},
      wasFound: isFound ? true : false,
    }
  }
}

export async function getStaticPaths(){
  const {photos} = await getImagesFn(objectRequest);
  return {
    paths: photos.map(picture => ({ params: { id: picture.id.toString()}})),
    fallback: true,
  }
}

const CoffeeStore = ({ generalData, wasFound })=>{
  const { state } = useContext(StoreContext);
  const [count, setCount ] = useState(0);
  const [ dislike, setDislike ] = useState(false);
  const [ complaint, setComplaint ] = useState("");
  const router = useRouter();

  if(router.isFallback){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  };

  function countHandler(){
    if(count === 1){
      setCount(count);
    }else{
      setCount(prevCount => prevCount + 1)
    }
  }

  if(generalData && wasFound){
    return (
      < CoffeeStoreComponent 
          store_data = {generalData}
          count = {count}
          countHandler = {countHandler}
          dislike = {dislike}
          setDislike = {setDislike}
          complaint={complaint}
          setComplaint={setComplaint}
      />
    )
  } else {
    if(state.itemSelected){
      const { itemSelected } = state;
      return (
        < CoffeeStoreComponent 
            store_data = {itemSelected}
            count = {count}
            countHandler = {countHandler}
            dislike = {dislike}
            setDislike = {setDislike}
            complaint={complaint}
            setComplaint={setComplaint}
        />
      )
    }
  }
}

export default CoffeeStore;
