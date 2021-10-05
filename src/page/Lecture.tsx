import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import axios from "axios"
import dotenv from "dotenv"
import styles from "./Lecture.module.scss";

import MenuBar from "../component/MenuBar";
import Footer from "../component/Footer";
import Nav from "../component/lecture/LectureNav";
import LectureArticle from "../component/lecture/LectureArticle";
import { ILecture } from "../LectureInterface"
import LectureContent from "../component/lecture/LectureContent";

dotenv.config()

const Lecture = () => {
    const { path } = useRouteMatch()
    const params = window.location.href.split('/').slice(3).filter((value) => value !== "")
    const lecturdId = Number(params[0])
    const unitId = Number(params[1])
    const smallUnitId = Number(params[2])

    const [navData, setNavData] = useState<ILecture>()
    const [articleData, setArticleData] = useState('')
    const [isLectureTitleOpened, setIsLectureTitleOpened] = useState(true)
    const [isUnitTitleOpened, setIsUnitTitleOpened] = useState(new Array<boolean>(navData === undefined ? 0 : navData.children.length).fill(false))

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + `/lecture/${lecturdId}`).then((res) => {
            setIsUnitTitleOpened(new Array<boolean>((res.data as unknown as ILecture).children.length).fill(false))
            setNavData(res.data)
        })
    }, [lecturdId])

    useEffect(() => {
        if (params.length > 1) {
            axios.get(process.env.REACT_APP_API + `/lecture/${lecturdId}/${unitId}/${smallUnitId}`).then((res) => {
                setArticleData(res.data)
            })
        }
    }, [lecturdId, params.length, smallUnitId, unitId])

    const toggleLectureTitleOpened = () => {
        setIsLectureTitleOpened(!isLectureTitleOpened)
    }

    const toggleUnitTitleOpened = (idx: number) => {
        const nlist = isUnitTitleOpened.slice()
        nlist[idx] = !nlist[idx]
        setIsUnitTitleOpened(nlist)
    }

    return (
        <div>
            <MenuBar></MenuBar>
            <section id={styles.Section}>
                <Nav lecture={navData} href={`/${lecturdId}`} toggleLectureTitleOpened={toggleLectureTitleOpened} isLectureTitleOpened={isLectureTitleOpened}
                    toggleUnitTitleOpened={toggleUnitTitleOpened} isUnitTitleOpened={isUnitTitleOpened}></Nav>
                <Route exact path={path} component={() => {
                    if (navData)
                        return <LectureContent name={navData.name} author={navData.author} description={navData.description}></LectureContent>
                    else
                        return <div></div>
                }}></Route>
                <Route path={path + '/:uid/:suid'} component={() => {
                    if (navData) {
                        const title = navData.children[unitId].children[smallUnitId].name
                        if (title)
                            return <LectureArticle title={title} article={articleData}></LectureArticle>
                        else 
                            return <div></div>
                    } else
                        return <div></div>  
                }}></Route>
            </section>
            <Footer></Footer>
        </div> 
    )
}

export default Lecture;