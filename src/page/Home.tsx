import React from "react";
import styles from "./Home.module.scss";
import { useHistory } from "react-router-dom";

import MenuBar from "../component/MenuBar"
import Footer from "../component/Footer"

interface LectureInfoProps {
    location: string
    name: string
}

const Lecture = (props: LectureInfoProps) => {
    const history = useHistory()

    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleClick = () => {
        history.push('/' + props.location)
    }

    return (
        <div className={styles.Item} onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + '/img/language/' + props.location + '.png'} alt={props.location} onDragStart={handleDragStart}></img>
            <div>{props.name}</div>
        </div>
    )
}

const Home = () => {
    return (
        <section>
            <MenuBar></MenuBar>
            <article id={styles.Article}>
                <div id={styles.Title}>
                    등록된 강좌
                </div>
                <div className={styles.Container}>
                    <Lecture location="c++" name="처음부터 배우는 C++"></Lecture>
                </div>
            </article>
            <Footer></Footer>
        </section>
    )
}

export default Home;