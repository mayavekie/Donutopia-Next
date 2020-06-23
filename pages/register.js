import React from "react";
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { string, object, number } from "yup";
import Axios from "axios";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import Link from "next/link"


export default function Register({postalCodes}){
    return(
        <>
        <Nav/>
        <Header title="Register" image="images/login-register-header1.jpg" alt="register-header" />
        <Formik
            validationSchema={
                object({
                    firstName: string().required("Dit veld is verplicht"),
                    lastName: string().required("Dit veld is verplicht"),
                    email: string().email("Dit is een ongeldig e-mail adres").required("Dit veld is verplicht"),
                    phone: number().min(10, "Een telefoonnummer bestaat uit minstens 10 cijfers").required("Dit veld is verplicht"),
                    password: string().min(6, "Wachtwoord moet uit minstens 6 tekens bestaan").required("Dit veld is verplicht"),
                    address: string().required("Dit veld is verplicht"),
                    postalCode: string().required("Dit veld is verplicht")

                })
            }
            initialValues = {
                {firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                address: '',
                postalCode: ''
            }
            } 
            onSubmit={(values) => {
                Axios.post("http://127.0.0.1:8000/api/users", values)
                .then(function (response){
                    console.log(response, "het is gelukt")
                    window.location="/login"
                    
                })
                .catch(function (error){
                    console.log(error, "oeps er lieps iets fout")
                })
            }}
        >
            {
                ({isSubmitting}) => (
                    <section class="register-section">
                    <Form className="register-form" > 
                        <article class="register">
                            <div class="register-left">
                                <Field name="firstName" type="text" placeholder="voornaam" className="input-form"></Field>
                                <ErrorMessage name="firstName" component="p"></ErrorMessage>
                                
                                <Field name="email" type="email" placeholder="email" className="input-form"></Field>
                                <ErrorMessage name="email" component="p"></ErrorMessage>

                                <Field name="phone" type="tel" placeholder="telefoonnummer" className="input-form"></Field>
                                <ErrorMessage name="phone" component="p"></ErrorMessage>

                                

                            </div>
                            <div class="register-right">
                                <Field name="lastName" type="text" placeholder="achternaam" className="input-form"></Field>
                                <ErrorMessage name="lastName" component="p"></ErrorMessage>

                                <Field name="password" type="password" placeholder="wachtwoord" className="input-form"></Field>
                                <ErrorMessage name="password" component="p"></ErrorMessage>

                                <Field name="address" type="text" placeholder="adres" className="input-form"></Field>
                                <ErrorMessage name="address" component="p"></ErrorMessage>

                               
                            </div>
                        </article>
                        <Field as="select" name="postalCode" className="input-form" placeholder="Postcode">
                                {
                                    postalCodes.map(postalCode => {
                                        return (<option value={`/api/postal-code/${postalCode.id}`}>{postalCode.structure}</option>)
                                    })
                                }

                                </Field>
                                <ErrorMessage name="postalCode" component="p"></ErrorMessage>
                        <button type="submit" disabled={isSubmitting}>Registreer</button>
                    </Form>
                    <Link href="/login"><a>Heb je al een account? Log je hier in!</a></Link>

                    </section>
                )
            }

        </Formik>
        <Footer/>
        </>
    )
}

export const getStaticProps = async () => {
    const request = await Axios.get('http://127.0.0.1:8000/api/postal-codes')
    const postalCodes= request.data['hydra:member']
    return {
      props: {
        postalCodes
      }
    }
  }

  