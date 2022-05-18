import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <meta property="og:image" content="https://images.prismic.io/tekizon/9fc72f83-af63-4d01-9488-c0b73f16dc42_Tekizon-Elemento-Notebook-Site-2022.png?auto=compress,format" />
                    <meta property="og:image:type" content="image/png"/>
                    <meta property="og:image:width" content="300"/>
                    <meta property="og:image:height" content="300"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}