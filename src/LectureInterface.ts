export interface ILectureSmallUnit {
    id: string,
    name: string
}

export interface ILectureUnit {
    id: string,
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