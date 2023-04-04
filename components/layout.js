import React from "react";
import NavBar from "./nav_bar";
import styles from "./layout.module.css";
function layout({user,children}) {
    return (
        <>
            <div className={styles.body_bg}>
                <NavBar user={user} />
                {children}
            </div>
        </>
    );
}

export default layout;
