import React from "react";
import { ILecture, ILectureUnit, ILectureSmallUnit } from "../../LectureInterface";
import { useHistory } from "react-router";
import styles from "./LectureNav.module.scss";

interface NavProps {
    lecture: ILecture | undefined,
    isLectureTitleOpened: boolean,
    toggleLectureTitleOpened: Function,
    isUnitTitleOpened: boolean[],
    toggleUnitTitleOpened: Function,
    href: string
}

interface UnitProps {
    unit: ILectureUnit,
    size: number,
    isUnitTitleOpened: boolean[],
    toggleUnitTitleOpened: Function,
    href: string,
    unitId: number
}

interface SmallUnitProps {
    smallUnit: ILectureSmallUnit,
    href: string,
    smallUnitId: number
}

const SmallUnit = (props: SmallUnitProps) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(props.href)
    }

    const params = window.location.href.split('/').slice(3).filter((value) => value !== "").join('/')
    const pparams = props.href.split('/').filter((value) => value !== "").join('/')

    let cname = `${styles.SmallUnitTitle}`
    if (params === pparams)
        cname += ` ${styles.selected}`

    return (
        <div className={cname}>
            <span onClick={handleClick}>{(props.smallUnitId + 1) + '. ' + props.smallUnit.name}</span>
        </div>
    )
}

const Unit = (props: UnitProps) => {
    const list = props.unit.children.map((lsunit: ILectureSmallUnit, index: number) => <SmallUnit smallUnit={lsunit} key={index} href={`${props.href}/${index}`} smallUnitId={index}></SmallUnit>)

    return (
        <div>
            <div className={styles.UnitTitle} onClick={() => props.toggleUnitTitleOpened(props.unitId)}>
                <span>{'Unit ' + (props.unitId + 1) + '. ' + props.unit.name}</span>
                <img src={process.env.PUBLIC_URL + '/img/right-arrow.png'} alt="드롭다운" className={props.isUnitTitleOpened[props.unitId] ? styles.opened : styles.closed}></img>
            </div>
            <div className={styles.low}>
                {props.isUnitTitleOpened[props.unitId] && list}
            </div>
        </div>
    )
}

const Nav = (props: NavProps) => {
    if (props.lecture === undefined) {
        return (
            <nav id={styles.Nav}></nav>
        )
    } else {    
        const list = props.lecture.children.map((lunit: ILectureUnit, index: number) => 
            <Unit unit={lunit} href={`${props.href}/${index}`} size={props.lecture!.children.length} key={index} unitId={index} toggleUnitTitleOpened={props.toggleUnitTitleOpened} isUnitTitleOpened={props.isUnitTitleOpened}></Unit>)

        return (
            <nav id={styles.Nav}>
                <div className={styles.LectureTitle} onClick={() => props.toggleLectureTitleOpened()}>
                    <span>{props.lecture.name}</span>
                    <img src={process.env.PUBLIC_URL + '/img/right-arrow.png'} alt="드롭다운" className={props.isLectureTitleOpened ? styles.opened : styles.closed}></img>
                </div>
                <div className={styles.low}>
                    {props.isLectureTitleOpened && list}
                </div>
            </nav>
        )
    }
}

export default Nav;