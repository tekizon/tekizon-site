import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <meta name="twitter:card" content="summary" />
                    <meta property="og:image" content="/tekizon-preview.png" />
                    <meta property="og:image:type" content="image/png"/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="630"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}