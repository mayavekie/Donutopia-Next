import React, {useState} from 'react'
import Footer from "../Components/Footer"
import {isNotAuthenticated} from "../helpers/helpers"
import { parseCookies } from 'nookies'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import {confirmAlert} from "react-confirm-alert"
import {logout} from "../helpers/helpers"
import Layout from '../Components/Layout'


export default function Profile({userData, id}) {

    const handleDelete = (event) => {
        event.preventDefault()
        confirmAlert({
            title:"Wil je je account verwijderen?",
            message: "Je account wordt definitief verwijdert.",
            buttons: [ {
                label: "Ja",
                className: "error-yes",
                onClick: () => deleteAccount()               
            },
            {
                label: "Nee"
            }]
        })
    }

    const deleteAccount = () => {
        axios.delete(`https://wdev.be/wdev_maya/eindwerk/api/user/${id}`)
            .then(response => {
                console.log(response)
                logout()
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    
    return(
        <>
        <Layout title="Profiel - Donutopia" description="Bekijk je profiel op donutopia en neem een kijkje in onze lekkere webshop." image="images/profile-header.jpg"/>
            <div className="profile-container">
                <section className="profile-section">
                    <article className="profile-data">
                        <div className="profile-left">
                            <span>
                                <label>Voornaam</label>
                                <p className="user-data">{userData.firstName}</p>
                            </span>
                            <span>
                                <label>E-mail</label>
                                <p className="user-data">{userData.email}</p>
                            </span>
                            <span>
                                <label>Telefoonnummer</label>
                                <p className="user-data">{userData.phone}</p>
                            </span>
                            <span>
                                <label>Postcode</label>
                                <p className="user-data">{userData.postalCode.postalCode}</p>
                            </span>
                        </div>
                        <div className="profile-right">
                            <span>
                                <label>Achternaam</label>
                                <p className="user-data">{userData.lastName}</p>
                            </span>
                            <span>
                                <label>Adres</label>
                                <p className="user-data">{userData.address}</p>
                            </span>
                            <span>
                                <label>Stad</label>
                                <p className="user-data">{userData.postalCode.city}</p>
                            </span>
                        </div>
                       
                        
                    </article>
                    <button>Profiel aanpassen</button>
                    <button className="delete-profile" onClick={handleDelete}> Profiel verwijderen</button>
                </section>
                <section className="order-section">

                </section>
            </div>
            <Footer/>
        </>
    )
}


export const getServerSideProps = async (ctx) => {
    isNotAuthenticated(ctx, "/login")

    const cookies= parseCookies(ctx);    
    const decode = jwt_decode(cookies.jwtToken)
    const id = decode.id

    const request = await axios.get(`https://wdev.be/wdev_maya/eindwerk/api/user/${id}`)
    const userData = request.data

    return {
        props : {
            userData,
            id 
        }
    }
  }


