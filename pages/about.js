import React from "react";
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

export default function About(){
    return(
        <>
          <Nav/>
          <Header title="Over" image="images/about-header.jpg" alt="about-header" />
          <section class="about-section">
              <article class="about-1">
                  <h2>Hoe het begon</h2>
                  <p>Exercitationem officiis distinctio sunt eveniet quisquam, enim consectetur aspernatur quae? Nobis, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita animi quibusdam. Commodi maiores, quaerat nisi odit pariatur, exercitationem officiis distinctio sunt eveniet quisquam, enim consectetur aspernatur quae? Nobis, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita animi quibusdam. Commodi maiores, quaerat nisi odit pariatur, exercitationem officiis distinctio sunt eveniet quisquam, enim consectetur aspernatur quae? </p>

              </article>
              <article class="about-2">
                  <aside>
                    <h2>De bakkerij</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ad eveniet sint iste ducimus, earum libero praesentium sapiente nemo voluptates magnam, accusantium nobis nulla consequatur cum? Quisquam quaerat perferendis rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p> Porro expedita animi quibusdam. Commodi maiores, quaerat nisi odit pariatur, exercitationem officiis distinctio sunt eveniet quisquam, enim consectetur aspernatur quae?  </p>

                  </aside>
                  <img src="/images/about-1.jpg" alt="about-bakkerij"></img>
              </article>
              <article class="about-3">
                  <img src="/images/about-2.jpg" alt="about-donut"></img>
                  <aside>
                    <h2>Onze passie</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nesciunt laudantium corporis eaque repudiandae odio incidunt quia natus at ipsam dolor commodi? Ipsum harum cum at et delectus commodi repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p>Enim consectetur aspernatur quae? Nobis, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita animi quibusdam. Commodi maiores, quaerat nisi odit pariatur, exercitationem officiis distinctio sunt eveniet quisquam, enim consectetur aspernatur quae? </p>

                  </aside>

              </article>
          </section>
          <Footer/>
        </>
    )
}