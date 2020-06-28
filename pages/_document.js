import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(){
        return (
            <Html>
                <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                {/* <script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script> */}
                <script src="/js/background.cycle.js"/>
                <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
                {/* <script src="/js/main.js"/> */}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument