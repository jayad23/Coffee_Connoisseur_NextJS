import styles from "./Banner.module.css";
const { 
    Container, title, 
    title1, title2, subTitle,
    button 
} = styles;
const Banner = ({ buttonText, buttonHandler})=>{
    return (
        <div className={Container}>
            <h1 className={title}>
                <span className={title1}>The</span>
                <span className={title2}>Conquistador</span>
            </h1>
            <p className={subTitle}>Discover the best pubs and cafes in Fuente Palmera</p>
            <button 
                className={button}
                onClick={buttonHandler}
                >
                    {buttonText}
            </button>
        </div>
    )
}

export default Banner;