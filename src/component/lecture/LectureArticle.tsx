import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";
import lstyles from "./Lecture.module.scss"

interface LectureArticleProps {
    title: string,
    article: string
}

const LectureArticle = (props: LectureArticleProps) => {
    return (
        <article id={lstyles.Article}>
            <div id={lstyles.LectureTitle}>
                <span>{props.title}</span>
            </div>
            <MarkdownRenderer>{props.article}</MarkdownRenderer>
        </article>
    )
}

export default LectureArticle;