import Link from "next/link";
import { linkButton } from "../../extras/extras.js";

const arr = [1,2,3,4,5,6,7];

const Container = {
    "marginTop": "30px"
}

const Cafes = ()=>{
    return (
        <div style={{ padding: "30px"}}>
            <h1>
                Coffe Store Route
            </h1>
            <div>
                {
                    arr.map(n=>
                        <Link key={n} href={`/cafe-store/${n}`}><a style={linkButton}>{n}</a></Link>
                    )
                }
            </div>
            <div style={Container}>
                <Link href="/"><a style={linkButton}>Home</a></Link>
            </div>
        </div>
    )
}

export default Cafes;