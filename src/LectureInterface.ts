export interface ILectureSmallUnit {
    name: string,
    isQuiz: boolean
}

export interface ILectureUnit {
    name: string,
    children: ILectureSmallUnit[]
}

export interface ILecture {
    name: string,
    description: string | null,
    author: string,
    children: ILectureUnit[]
}

export interface ILectureQuizSubjectiveAnswer {
    correctAnswer: string[]
}

export interface ILectureQuizObjectiveAnswer {
    answerList: string[]
    correctAnswer: number[]
}

export interface ILectureQuiz {
    question: string,
    isSubjective: boolean,
    answer: ILectureQuizObjectiveAnswer | ILectureQuizSubjectiveAnswer,
    explanation: string
}