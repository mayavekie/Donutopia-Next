import React from "react"

export default function Header({title, image}){
    return(
        <>
        <header className="header-pages" style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <h1>{title}</h1>
        </header>
        
        </>
    )
}