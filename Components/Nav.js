import React from "react";
// import Link from "next/link";
import Link from "./Link"
import {useState, useEffect} from 'react'
import {parseCookies} from 'nookies'
import {logout} from "../helpers/helpers"

export default function Nav () {
    const [loggedin, setLoggedin] =useState(false)
    useEffect(() => {
        const cookies = parseCookies()
        typeof cookies.jwtToken !== 'undefined' ? setLoggedin(true) : setLoggedin(false)
    })
    return(
    <>
        <nav className="main-nav">
            <section><Link href="/"><a title="home">
                    <img src="/images/logo.png" alt="logo"></img>
                </a></Link>
                <p>Donutopia</p>
            </section>
            <ul>
                <li><Link href="/"><a title="home" >Home</a></Link></li>
                <li><Link href="/about"><a title="about">Over</a></Link></li>
                <li><Link href="/shop"><a title="shop">Shop</a></Link></li>
            </ul>
            < ul className="nav-profile">
                {loggedin &&
                    <>
                        <li><Link href="/profile"><a title="profiel">Profiel</a></Link></li> 
                        <li><Link href="/"><a onClick={logout}>Afmelden</a></Link> </li>

                    </>
                    ||
                    <li className="nav-loggedin"><Link href="/login"><a title="login">Inloggen</a></Link></li> 


                }
            </ul>
            
        </nav>
    </>
    )
}