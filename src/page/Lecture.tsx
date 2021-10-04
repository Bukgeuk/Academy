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

const Lecture = (props: { lectureId: string }) => {
    
    const { path } = useRouteMatch()
    const params = window.location.href.substr((process.env.REACT_APP_API + path).length + 1).split('/').filter((value) => value !== "")

    const [navData, setNavData] = useState<ILecture>()
    const [articleData, setArticleData] = useState('')
    const [isLectureTitleOpened, setIsLectureTitleOpened] = useState(true)
    const [isUnitTitleOpened, setIsUnitTitleOpened] = useState(new Array<boolean>(navData === undefined ? 0 : navData.children.length).fill(false))

    useEffect(() => {
        console.log('데이터 요청')
        axios.get(process.env.REACT_APP_API + `/lecture/${props.lectureId}`).then((res) => {
            setIsUnitTitleOpened(new Array<boolean>((res.data as unknown as ILecture).children.length).fill(false))
            setNavData(res.data)
            console.log('데이터 받아옴')
        })
    }, [props.lectureId])

    useEffect(() => {
        console.log('글 데이터 요청')
        if (params.length > 0) {
            axios.get(process.env.REACT_APP_API + `/lecture/${props.lectureId}/${params[0]}/${params[1]}`).then((res) => {
                setArticleData(res.data)
                console.log('글 데이터 받아옴')
            })
        }
    }, [params, props.lectureId])

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
                <Nav lecture={navData} href={path} toggleLectureTitleOpened={toggleLectureTitleOpened} isLectureTitleOpened={isLectureTitleOpened}
                    toggleUnitTitleOpened={toggleUnitTitleOpened} isUnitTitleOpened={isUnitTitleOpened}></Nav>
                <Route exact path={path} component={() => {
                    if (navData)
                        return <LectureContent name={navData.name} author={navData.author} description={navData.description}></LectureContent>
                    else
                        return <div></div>
                }}></Route>
                <Route path={path + '/:uid/:suid'} component={() => {
                    if (navData) {
                        const title = navData.children.filter((value) => value.id === params[0])[0].children.filter((value) => value.id === params[1])[0].name
                        return <LectureArticle title={title} article={articleData}></LectureArticle>
                    } else
                        return <div></div>  
                }}></Route>
            </section>
            <Footer></Footer>
        </div> 
    )
}

export default Lecture;