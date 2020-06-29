import Header from "./Header"
import Nav from "./Nav"
import Head from "next/head"

export default ({title, image, description}) => {
    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
        </Head>
        <Nav/>
        <Header title={title} image={image}/>
        </>
    )
}