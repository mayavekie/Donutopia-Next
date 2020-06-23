import React, {useState} from 'react'
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import {isLoggedIn} from "../helpers/helpers"
import { parseCookies } from 'nookies'


export default function Profile({}) {
    // console.log(JSON.parse(data))
    return(
        <>
            <Nav/>
            <Header title="Profile" image="images/profile-header.jpg" alt="profiel-header"/>
            <div>
                <section class="profile-section">

                </section>
                <section class="order-section">

                </section>
            </div>
            <Footer/>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    isLoggedIn(ctx, "/login")
    // const response = await axios.get('http://127.0.0.1:8000/api/user/')
    // const products = response.data['hydra:member']
    // return {
    //   props: {
    //     products
    //   }
    // }
    const cookie= parseCookies(ctx)
    const data = cookie.userinfo
    return {
        props: {
            data
        }   
    }
  }
