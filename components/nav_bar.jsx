import React from "react";
import styles from "./nav_bar.module.css";
import { useRouter } from "next/router";

function nav_bar() {
    // to change color of link in nav according to page in which it is in.

    const router = useRouter();
    const a_home = {
        color: router.pathname === "/" ? "red" : "aliceblue",
    };
    const a_high_score = {
        color: router.pathname === "/high-score" ? "red" : "aliceblue",
    };
    const a_about = {
        color: router.pathname === "/about" ? "red" : "aliceblue",
    };
    return (
        <nav
            className={`navbar ${styles.navbar_light} ${styles.bg_light} d-flex justify-content-start`}
        >
            <span className={`${styles.navbar_brand} h1 ${styles.head} mx-3`}>
                Speed Typer
            </span>

            <div className={`${styles.navbar_opt}`}>
                <a
                    className={`${styles.nav_item} ${styles.nav_link}`}
                    href="/"
                    style={a_home}
                >
                    Home{" "}
                </a>
                <a
                    className={`${styles.nav_item} ${styles.nav_link}`}
                    href="#"
                    style={a_high_score}
                >
                    High Score
                </a>
                <a
                    className={`${styles.nav_item} ${styles.nav_link}`}
                    href="#"
                    style={a_about}
                >
                    About
                </a>
            </div>
        </nav>
    );
}

export default nav_bar;
