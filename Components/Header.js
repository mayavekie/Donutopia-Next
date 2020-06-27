import React from "react"

export default function Header({title, image, alt}){
    return(
        <>
        <header className="header-pages"style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <h1>{title}</h1>
            {/* <img src={image} alt={alt}></img> */}
        </header>
        
        </>
    )
}