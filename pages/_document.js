import Document, { Html, Head, Main, NextScript} from "next/document";
class CustomDocument extends Document{
    render(){
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="true" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Tapestry&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>

            </Html>
        )
    }
}

export default CustomDocument;