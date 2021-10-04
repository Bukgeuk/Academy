import React from "react";
import Footer from "../component/Footer";
import MenuBar from "../component/MenuBar";
import styles from "./About.module.scss"

const About = () => {
    return (
        <section>
            <MenuBar></MenuBar>
            <article id={styles.Article}>

            </article>
            <Footer></Footer>
        </section>
    )
}

export default About;