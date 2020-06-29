import React, {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import axios from "axios"
import {setCookie} from "nookies"
import Layout from "../Components/Layout"
import Footer from "../Components/Footer"
import Link from "next/link"
import {isAuthenticated} from "../helpers/helpers"
import jwt_decode from 'jwt-decode'


export default function Login(){

    const [error, setError] = useState("")
    return(
        <>
        <Layout title="Login" description="Log je in om gebruik te kunnen maken van de volledige webshop en begin meteen met smullen." image="images/login-register-header1.jpg"/>
        {/* Formulier met Formik */}
        <Formik
        // validatie met yup 
            validationSchema={
                object({
                    username: string().email("Ongeldig email adres").required("Email is verplicht"),
                    password: string().required("Wachtwoord is verplicht")
                })
            }
            initialValues={{ username: '', password: '' }}
            //Het posten van de registratie gegevens
            onSubmit={(values)=> {
                axios.post("https://wdev.be/wdev_maya/eindwerk/api/login_check", values)
                    .then(function (response) {
                        const jwtToken = response.data.token
                        const jwtDecoded = jwt_decode(jwtToken)
                        setCookie(null, "jwtToken", jwtToken, {
                            maxAge: 60 * 60,
                            path: "/"                        
                        })                       
                        window.location = "/"
                    })
                    .catch(function () {
                        setError("Oei, er liep iets fout! Controleer of je email en wachtwoord kloppen. ")
                    });
            }}>
            {
                ({isSubmitting}) => (
                    <section className="login-section">
                    
                    <Form className="login-form"> 
                        <p className="error">{error}</p>
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
    isAuthenticated(ctx, "/profile")
    return {props: {}}
}