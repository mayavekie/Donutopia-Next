import React from "react";
import Link from "next/link";

export default function Nav () {
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
            < ul class="nav-profile">
                <li><Link href="/login"><a title="login">Inloggen</a></Link>
                </li> 
            </ul>
            
        </nav>
    </>
    )
}