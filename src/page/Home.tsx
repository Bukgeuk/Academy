import React from "react";
import styles from "./Home.module.scss";

import MenuBar from "../component/MenuBar"
import Footer from "../component/Footer"

interface LectureInfoProps {
    location: string
    name: string
}

const Lecture = (props: LectureInfoProps) => {
    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleClick = () => {
        window.location.href = '/' + props.location
    }

    return (
        <div id={styles.Item} onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + '/img/language/' + props.location + '.png'} alt={props.location} onDragStart={handleDragStart}></img>
            <div>{props.name}</div>
        </div>
    )
}

const Home = () => {
    return (
        <section>
            <MenuBar></MenuBar>
            <article>
                <div id={styles.Title}>
                    등록된 강좌
                </div>
                <div id={styles.Container}>
                    <Lecture location="c++" name="처음부터 배우는 C++"></Lecture>
                </div>
            </article>
            <Footer></Footer>
        </section>
    )
}

export default Home;