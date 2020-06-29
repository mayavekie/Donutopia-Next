import React, { useState } from "react";
import Footer from "../Components/Footer"
import { string, object, number, boolean } from "yup";
import Axios from "axios";
import { Form, Formik, Field, ErrorMessage } from 'formik'
import Link from "next/link"
import { isAuthenticated } from "../helpers/helpers"
import Select from 'react-select'
import Layout from "../Components/Layout";

const customStyles = {
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#EB9BC8"
    }),

    container: (provided, state) => ({
        ...provided,
        width: "30%",
        padding: 10,
        borderRadius: "30px",
        marginBottom: 10,
        marginTop: 10,
        border: "2px solid #EB9BC8",
        background: "white"

    })

}

export default function Register({ postalCodes }) {
    const options = postalCodes.map((p) => { return { value: `api/postal-code/${p.id}`, label: `${p.structure} ` } })
    const [message, setMessage] = useState("")

    return (
        <>
        <Layout title="Registratie" description="Registreer je nu bij Donutopia en maak je eerste aankoop in de online donutwinkel." image="images/login-register-header1.jpg"/>
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
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        password: '',
                        address: '',
                        postalCode: ''
                    }
                }
                onSubmit={(values) => {
                    console.log(values)
                    Axios.post("https://wdev.be/wdev_maya/eindwerk/api/users", values)
                        .then(function (response) {
                            console.log(response, "Je bent werd ingelogd")
                            window.location = "/login"

                        })
                        .catch(function (error) {
                            console.log(error, "oeps er lieps iets fout")
                        })
                }}
            >
                {
                    ({ isSubmitting, setFieldValue }) => (
                        <section className="register-section">
                            <Form className="register-form" >
                                <article className="register">
                                    <div className="register-left">
                                        <Field name="firstName" type="text" placeholder="voornaam" className="input-form"></Field>
                                        <div><ErrorMessage name="firstName" component="p"></ErrorMessage></div>

                                        <Field name="email" type="email" placeholder="email" className="input-form"></Field>
                                        <div><ErrorMessage name="email" component="p"></ErrorMessage></div>

                                        <Field name="phone" type="tel" placeholder="telefoonnummer" className="input-form"></Field>
                                        <div><ErrorMessage name="phone" component="p"></ErrorMessage></div>



                                    </div>
                                    <div className="register-right">
                                        <Field name="lastName" type="text" placeholder="achternaam" className="input-form"></Field>
                                        <div class="error"><ErrorMessage name="lastName" component="p"></ErrorMessage></div>

                                        <Field name="password" type="password" placeholder="wachtwoord" className="input-form"></Field>
                                        <div><ErrorMessage name="password" component="p"></ErrorMessage></div>

                                        <Field name="address" type="text" placeholder="adres" className="input-form"></Field>
                                        <div><ErrorMessage name="address" component="p"></ErrorMessage></div>


                                    </div>
                                </article>
                                {/* <Field as="select" name="postalCode" className="input-form" placeholder="Postcode">
                                    {
                                        postalCodes.map(postalCode => {

                                            return (<option value={`/api/postal-code/${postalCode.id}`}>{postalCode.structure}</option>)
                                        })
                                    }

                                </Field> */}
                                {options && <Select options={options} styles={customStyles} onChange={(value) => {
                                    setFieldValue('postalCode',value.value )
                                }} placeholder={'Stad'} className="input-form"
                                />}
                                <ErrorMessage name="postalCode" component="p"></ErrorMessage>
                                <button type="submit" disabled={isSubmitting}>Registreer</button>
                                <p>{message}</p>
                            </Form>
                            <Link href="/login"><a>Heb je al een account? Log je hier in!</a></Link>

                        </section>
                    )
                }

            </Formik>
            <Footer />
        </>
    )
}

export const getStaticProps = async (ctx) => {
    isAuthenticated(ctx, "/profile")

    const request = await Axios.get('https://wdev.be/wdev_maya/eindwerk/api/postal-codes')
    const postalCodes = request.data['hydra:member']
    return {
        props: {
            postalCodes
        }
    }
}

