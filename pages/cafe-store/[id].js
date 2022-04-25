import { useRouter } from "next/router";
import Link from "next/link";


import { linkButton } from "../../extras/extras.js";

const Stores = ()=>{
    const { query } = useRouter()
    return (
        <div>
            <h2>I am a store!: {query.id}</h2>
            <div>
                <Link href="/" ><a style={linkButton}>Back to Home</a></Link>
                <Link href="/cafe-store" ><a style={linkButton}>Back to Cafes</a></Link>
            </div>
        </div>
    )
}

export default Stores;