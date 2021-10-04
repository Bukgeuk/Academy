export interface ILectureSmallUnit {
    name: string
}

export interface ILectureUnit {
    name: string,
    description: string | null,
    children: ILectureSmallUnit[]
}

export interface ILecture {
    name: string,
    description: string | null,
    author: string,
    children: ILectureUnit[]
}