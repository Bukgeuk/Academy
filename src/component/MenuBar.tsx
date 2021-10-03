import React from "react"
import styles from "./MenuBar.module.scss"

const MenuBar = () => {
    const handleClick = () => {
        window.location.href = '/'
    }

    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
    }

    return (
        <header id={styles.MenuBar} onClick={handleClick}>
            <div id={styles.logo}>
                <img src={process.env.PUBLIC_URL + '/img/logo_colored.png'} alt="로고" onDragStart={handleDragStart}></img>
                <div><span>Dev Academy</span></div> 
            </div>
            <img src={process.env.PUBLIC_URL + "/img/member.png"} alt="멤버" id={styles.member}></img>
        </header>
    )
}

export default MenuBar