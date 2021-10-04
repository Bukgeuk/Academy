import React from "react"
import styles from "./MenuBar.module.scss"
import { useHistory } from "react-router-dom";

const MenuBar = () => {
    const history = useHistory()

    const handleLogoClick = () => {
        history.push('/')    
    }

    const handleAboutClick = () => {
        history.push('/about')
    }

    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
    }

    return (
        <header id={styles.MenuBar}>
            <div id={styles.logo} onClick={handleLogoClick}>
                <img src={process.env.PUBLIC_URL + '/img/logo_colored.png'} alt="로고" onDragStart={handleDragStart}></img>
                <div><span>Dev Academy</span></div> 
            </div>
            <div id={styles.menu}>
                <div><span onClick={handleAboutClick}>About</span></div>
            </div>
            <img src={process.env.PUBLIC_URL + "/img/member.png"} alt="멤버" id={styles.member}></img>
        </header>
    )
}

export default MenuBar