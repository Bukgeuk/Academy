import React from "react";
import lstyles from "./Lecture.module.scss"
import styles from "./LectureContent.module.scss"

interface ContentProps {
    name: string,
    description: string | null,
    author: string
}

const Description = (props: { children: string }) => {
    return (
        <div className={styles.Description}>
            <span>{props.children}</span>
        </div>
    )
}

const LectureContent = (props: ContentProps) => {

    return (
        <article id={lstyles.Article}>
            <div id={lstyles.LectureTitle}>
                <span>{props.name}</span>
            </div>
            <div id={styles.Author}>
                <span>{'by ' + props.author}</span>
            </div>
            {props.description && <Description>{props.description}</Description>}
        </article>
    )
}

export default LectureContent;