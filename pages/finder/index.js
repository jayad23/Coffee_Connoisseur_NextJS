import {useState, useContext, useEffect} from "react";
import { StoreContext, Types } from "../../Context/StoreContext.js";
import { valueRefactor } from "../../lib/valueRefactor";
import Link from "next/link"
import styles from "./finder.module.css";
import Card from "../../Components/Card/Card.js";

export default function Finder (){
    const [ searchValue, setSearchValue ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({ isError: false, message: undefined });
    const { state, dispatch } = useContext(StoreContext);

    const searchHandler = (e)=>{
        e.preventDefault();
        const { data } = valueRefactor(searchValue);
        if( data !== "error"){
            setLoading(true)
            const request = async ()=>{
                const response = await fetch(`https://api.pexels.com/v1/search?query=${data}&per_page=24`, { 
                    headers: {
                        Authorization: "563492ad6f9170000100000198e1e2600f3640b9b31a74ac6f6919b3",
                    }}
                );
                const results = await response.json();
                dispatch({ type: Types.SEARCH, payload: results.photos })
                setLoading(false);
            }
            request();
        }else{
            setError({isError: true, message: data})
        }
        setSearchValue("");
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.buttonWrapper}>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
            <div className={state.searchResults?.length > 0 ? styles.animation : styles.subWrapper}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>What cute pics are you up to, today?</h1>
                </div>
                <form 
                    className={styles.formWrapper}
                    onSubmit={searchHandler}
                    >
                    <input 
                        className={styles.inputField}
                        value={searchValue}
                        onChange={(e)=> setSearchValue(e.target.value)}
                    />
                    <button type="submit" className={styles.button}>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
                <div className={styles.cardLayout}>
                    {
                        loading ?
                        <h1 style={{color: "white"}}>Processing request...</h1>
                        : 
                        state.searchResults?.length > 0 ?
                        state.searchResults?.map((picture)=>{
                            return (
                                <Card
                                    key={picture.id}
                                    id={picture.id}
                                    name={picture.alt}
                                    linkTo={`/issue/${picture.id}`}
                                    image={picture.src.portrait}
                                    className={styles.card}
                                />
                            )
                            })
                        :
                        <h1 style={{color: "white"}}>{error.isError ? error.message : ""}</h1>
                    }
                </div>
            </div>
        </div>
    )
}