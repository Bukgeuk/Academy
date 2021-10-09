import React, { useState } from "react";
import { ILectureQuiz, ILectureQuizObjectiveAnswer, ILectureQuizSubjectiveAnswer } from "../../LectureInterface";
//import { Button } from "react-bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';
import lstyles from "./Lecture.module.scss"
import styles from "./LectureQuiz.module.scss"

interface LectureQuizProps {
    title: string,
    quiz: ILectureQuiz[] | undefined
}

interface QuizProps {
    quiz: ILectureQuiz,
    isMarked: boolean,
    //func: Function,
    //userInput: string | number[]
}

interface ObjectiveFieldProps {
    answer: ILectureQuizObjectiveAnswer,
    isMarked: boolean
    //userInput: number[]
}

interface SubjectiveFieldProps {
    answer: ILectureQuizSubjectiveAnswer,
    isMarked: boolean
}

type userInput = (string | number[])[]

const ObjectiveField = (props: ObjectiveFieldProps) => {
    const [selectedList, setSelectedList] = useState(new Array<number>(0))

    const toggleSelectedList = (index: number) => {
        const nlist = selectedList.slice()
        if (nlist.includes(index)) {
            for (let i = 0; i < nlist.length; i++) {
                if (nlist[i] === index) {
                    nlist.splice(i, 1)
                    break
                }
            }
        } else {
            nlist.push(index)
        }

        setSelectedList(nlist)
    }

    const list = (props.answer).answerList.map((value, index) => {
        const selected = selectedList.includes(index)

        let cname = styles.check + ' '
        if (props.isMarked && selected) {
            if (props.answer.correctAnswer.includes(index) === selected) cname += styles.correct
            else cname += styles.incorrect
        }

        return (
            <div key={index} className={cname}>
                <input type="checkbox" checked={selected} onChange={() => toggleSelectedList(index)} disabled={props.isMarked}></input>
                <label>{value}</label>
            </div>
        )
    })

    return <div>{list}</div>
}

const SubjectiveField = (props: SubjectiveFieldProps) => {
    const [value, setValue] = useState('')

    let cname = styles.QuizTextInput + ' '
    if (props.isMarked) {
        if (props.answer.correctAnswer.includes(value)) cname += styles.correct
        else cname += styles.incorrect
    }

    return (
        <div>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} readOnly={props.isMarked} className={cname}></input>
        </div>
    )
}

const Quiz = (props: QuizProps) => { 
    return (
        <div className={styles.quiz}>
            <div className={styles.question}><span>{props.quiz.question}</span></div>
            {props.quiz.isSubjective ? <SubjectiveField answer={props.quiz.answer as ILectureQuizSubjectiveAnswer} isMarked={props.isMarked}></SubjectiveField>
            : <ObjectiveField answer={props.quiz.answer as ILectureQuizObjectiveAnswer} isMarked={props.isMarked}></ObjectiveField>}
        </div>
    )
}

const LectureQuiz = (props: LectureQuizProps) => {
    const [isMarked, setIsMarked] = useState(false)
    //const [inputList, setInputList] = useState<userInput>(new Array<string | number[]>(props.quiz ? props.quiz.length : 0))

    /*const func = (idx: number, value: string | number[]) => {
        const nlist = inputList?.slice()
        nlist[idx] = value
        setInputList(nlist)
    }*/

    const handleButtonClick = () => {
        setIsMarked(true)
    }

    const list = props.quiz?.map((element, index) => <Quiz key={index} quiz={element} isMarked={isMarked}></Quiz>)
    return (
        <article id={lstyles.Article}>
            <div id={lstyles.LectureTitle}>
                <span>{props.title}</span>
            </div>
            <div id={styles.QuizList}>
                {props.quiz !== undefined && list}
                {/*<Button variant="primary" onClick={handleButtonClick}>채점</Button>*/}
            </div>
        </article>
    )
}

export default LectureQuiz