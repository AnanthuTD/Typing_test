
import styles from "./nav_bar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function nav_bar({ user }) {
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
    const a_game = {
        color: router.pathname === "/game" ? "red" : "aliceblue",
    };

    return (
        <nav
            className={`navbar ${styles.navbar_light} ${styles.bg_light} justify-content-between`}
        >
            
            {/* left aligned */}

            <div className="d-flex align-items-center">
                <Link
                    href={"/"}
                    className={`${styles.navbar_brand} h1 ${styles.head} mx-3`}
                >
                    Speed Typer
                </Link>

                <div className={`${styles.navbar_opt}`}>
                    <Link style={a_home} href={"/"}>
                        Home
                    </Link>
                    <Link style={a_high_score} href={"/high-score"}>
                        High Score
                    </Link>
                    <Link style={a_about} href={"/about"}>
                        About
                    </Link>
                    <Link style={a_game} href={"/game"}>
                        Game
                    </Link>
                </div>
            </div>

            {/* right aligned */}

            <div className={styles.navbar_right}>
                {user ? (
                    <Image
                        src={
                            user.picture
                                ? user.picture
                                : `https://robohash.org/${user.email}.svg`
                        }
                        alt="Avatar"
                        width={50}
                        height={50}
                        className={styles.circle}
                    />
                ) : null}
            </div>
        </nav>
    );
}

export default nav_bar;
