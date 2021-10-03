import React from "react";
import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <article id={styles.Article}>
            <div>
                <img src={process.env.PUBLIC_URL + '/img/code_thinking.svg'} alt="404"></img>
            </div>
            <div>
                <h1>404</h1>
                <span>요청하신 페이지를 찾을 수 없습니다</span>
            </div>
        </article>
    )
}

export default NotFound;