import React from "react";
import { ILecture, ILectureUnit, ILectureSmallUnit } from "../../LectureInterface";
import { useHistory } from "react-router";
import styles from "./LectureNav.module.scss";

interface NavProps {
    lecture: ILecture | undefined,
    href: string,
    isLectureTitleOpened: boolean,
    toggleLectureTitleOpened: Function,
    isUnitTitleOpened: boolean[],
    toggleUnitTitleOpened: Function
}

interface UnitProps {
    unit: ILectureUnit,
    size: number,
    id: number,
    isUnitTitleOpened: boolean[],
    toggleUnitTitleOpened: Function,
    href: string
}

interface SmallUnitProps {
    smallUnit: ILectureSmallUnit,
    href: string
}

const SmallUnit = (props: SmallUnitProps) => {
    const history = useHistory()

    const handleClick = () => {
        //window.location.href = `${props.href}/${props.smallUnit.id}`
        history.push(`${props.href}/${props.smallUnit.id}`)
    }

    return (
        <div className={styles.SmallUnitTitle}>
            <span onClick={handleClick}>{props.smallUnit.id + '. ' + props.smallUnit.name}</span>
        </div>
    )
}

const Unit = (props: UnitProps) => {
    const list = props.unit.children.map((lsunit: ILectureSmallUnit, index: number) => <SmallUnit href={`${props.href}/${props.unit.id}`} smallUnit={lsunit} key={index}></SmallUnit>)

    return (
        <div>
            <div className={styles.UnitTitle} onClick={() => props.toggleUnitTitleOpened(props.id)}>
                <span>{'Unit ' + props.unit.id + '. ' + props.unit.name}</span>
                <img src={process.env.PUBLIC_URL + '/img/right-arrow.png'} alt="드롭다운" className={props.isUnitTitleOpened[props.id] ? styles.opened : styles.closed}></img>
            </div>
            <div className={styles.low}>
                {props.isUnitTitleOpened[props.id] && list}
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
            <Unit unit={lunit} href={props.href} size={props.lecture!.children.length} key={index} id={index} toggleUnitTitleOpened={props.toggleUnitTitleOpened} isUnitTitleOpened={props.isUnitTitleOpened}></Unit>)

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