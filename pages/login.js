import React, {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import axios from "axios"
import {setCookie} from "nookies"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Link from "next/link"
import {getJwt} from "../helpers/helpers"


export default function Login(){

    const [error, setError] = useState("")
    return(
        <>
        <Nav/>
        <Header title="Login" image="images/login-register-header1.jpg" alt="login-header" />
        <Formik 
            validationSchema={
                object({
                    username: string().email("Ongeldig email adres").required("Email is verplicht"),
                    password: string().required("Wachtwoord is verplicht")
                })
            }
            initialValues={{ username: '', password: '' }}
            onSubmit={(values)=> {
                axios.post("http://127.0.0.1:8000/api/login_check", values)
                    .then(function (response) {
                        setCookie(null, "jwtToken", response.data.token, {
                            maxAge: 60 * 60,
                            path: "/"
                            
                        })
                        window.location = "/"
                        console.log(response.data.token)
                    })
                    .catch(function () {
                        setError("Oei, er liep iets fout! Controleer of je email en wachtwoord kloppen. ")
                    });
            }}>
            {
                ({isSubmitting}) => (
                    <section class="login-section">
                    
                    <Form className="login-form"> 
                        <p class="error">{error}</p>
                        <Field name="username" type="email" placeholder="email" className="input-form"></Field>
                        <ErrorMessage name="username" component="p"></ErrorMessage>
                        <Field name="password" type="password" placeholder="wachtwoord" className="input-form"></Field>
                        <ErrorMessage name="password" component="p"></ErrorMessage>
                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </Form>
                    <Link href="/register"><a>Heb je nog geen account? Registreer hier!</a></Link>

                    </section>
                )
            }
        </Formik>
        <Footer/>
        </>
    )
}

export const getServerSideProps = async(ctx) => {
    const jwt = getJwt(ctx)
    if(typeof jwt === "undefined"){
        return{ props: {} }
    } else {
        return { props: {jwt} };
    }
}


        {/* <Formik
            validationSchema ={
                object({
                    username: string().email().required(),
                    password: string().min(6).required()
                })
            }
            initialValues={{username: '', password: ''}}
            validate={values => {
                const errors ={};
                if (!values.username){
                    errors.username = "Email is verplicht";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username) ) {
                    errors.username = "Ongeldig email adres"
                }
                return errors;
                }
            }
            onSubmit={(values) => {
                axios.post("localhost:8000/api/login_check", values)
                .then(function (response) {
                    setCookie(null, "jwtToken", response.data.token, {
                        maxAge: 60*60,
                        path: '/',
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
            }}
        >
            <section class="login-section">
                
            {
                ({isSubmitting}) => (
                    <Form class="login-form">
                        <Field type="email" name="username" placeholder="email" class="input-form"></Field>
                        <ErrorMessage name="username" component="p"/>
                        <Field type="password" name="password" placeholder="wachtwoord" class="input-form"></Field>
                        <ErrorMessage name="password" component="p"/>
                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </Form>
                )
            }
            <Link href="/register"><a>Heb je nog geen account? Registreer hier!</a></Link>
            </section>

        
        </Formik> */}