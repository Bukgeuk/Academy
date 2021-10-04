import React from "react";
import styles from "./Home.module.scss";
import { useHistory } from "react-router-dom";

import MenuBar from "../component/MenuBar"
import Footer from "../component/Footer"

interface LectureInfoProps {
    id: number,
    name: string
}

const LectureItem = (props: LectureInfoProps) => {
    const history = useHistory()

    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleClick = () => {
        history.push('/' + props.id)
    }

    return (
        <div className={styles.Item} onClick={handleClick}>
            <img src={process.env.REACT_APP_API + `/lecture/image/${props.id}`} alt="이미지" onDragStart={handleDragStart}></img>
            <div>{props.name}</div>
        </div>
    )
}

const Home = (props: { lectureList: string[] }) => {
    const list = props.lectureList.map((value, index) => {
        return <LectureItem id={index} name={value} key={index}></LectureItem>
    })

    return (
        <section>
            <MenuBar></MenuBar>
            <article id={styles.Article}>
                <div id={styles.Title}>
                    등록된 강좌
                </div>
                <div className={styles.Container}>
                    {list}
                </div>
            </article>
            <Footer></Footer>
        </section>
    )
}

export default Home;