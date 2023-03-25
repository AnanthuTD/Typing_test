import React from "react";
import NavBar from './nav_bar'
import styles from './layout.module.css'
function layout({ children}) {
    return (
        <>
        <div className={styles.body_bg}>

            <NavBar />
            {children}
        </div>
        </>
    );
}

export default layout;
