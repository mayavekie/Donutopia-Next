import React from "react";
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

export default function Login(){
    return(
        <>
        <Nav/>
        <Header title="Login" image="images/login-register-header1.jpg" alt="login-header" />
        <Footer/>
        </>
    )
}