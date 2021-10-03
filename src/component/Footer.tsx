import React from "react";
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer id={styles.Footer}>
            <div id={styles.Top}>
                <img src={process.env.PUBLIC_URL + '/img/logo_white.png'} alt="로고"></img>
                <div className={styles.FooterMenu}>
                    <div><span>이용약관</span></div>
                    <div><span>개인정보 취급방침</span></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;