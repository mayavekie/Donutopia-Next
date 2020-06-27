import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return ( <>
        <footer>  
            <section className="footer-container">
                <aside>
                    <article>
                        <h2>Ons adres</h2>
                        <address>
                            <span className="address">Mechelse straat 1, <br/> 2800 Mechelen</span><br/>
                            <span className="phone"><a href="tel:0123456789" title="">+32 123 45 67 89</a></span><br/>
                            <span className="email"><a href="mailto:info@donutopia.be" title="">info@donutopia.be</a></span><br/>
                        </address>
                    </article>
                    <article>
                        <h2>Openingsuren</h2>
                        <p>Maandag: Gesloten</p>
                        <p>Dinsdag: 08:00-19:00</p>
                        <p>Woensdag: 08:00-19:00</p>
                        <p>Donderdag: 08:00-19:00</p>
                        <p>Vrijdag: 08:00-19:00</p>
                        <p>Zaterdag: 09:00-20:00</p>
                        <p>Zondag: 09:00-17:00</p>
                    </article>
                </aside>
                <article className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1175480534935!2d4.457144515939305!3d51.05091727956269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e59dfb566e01%3A0x31da3bea9c0907c3!2sSyntra%20AB%20campus%20Mechelen!5e0!3m2!1snl!2sbe!4v1591623587514!5m2!1snl!2sbe" ></iframe>
                </article>
            </section>
            
            <section className="footer-social">
                <p className="social">                   
                    {/* <a href="#" title="facebook">
                    <FontAwesomeIcon icon={['fab', 'facebook']}/>
                    </a>
                    <a href="#" title="instagram">
                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </a> */}
                </p>
                <p className="copyright">&copy; 2020 Donutopia - Syntra. Alle rechten voorbehouden.</p>
            </section>
        </footer>
  </>)
}