import Link from "next/link";
import styles from "./levels.module.css";
import Cookies from 'js-cookie'

function levels(props) {
    function setCooky(level){
        console.log("cookies");
        Cookies.set("level", level)
    }
    return (
        <>
            <div className={[styles.outer_level].join(" ")}>
                <div className={["row", styles.inner_level].join(" ")}>
                    <div className="col-sm-4 col-md-3 p-1">
                        <div className={["rounded shadow bg-black p-1",styles.inner_level_box].join(" ")}>
                            <div className={styles.inner_level_title}>
                                <Link onClick={()=>setCooky("beginner")} href={{ pathname: '/game/'}} >
                                    <h2>Biginner</h2>
                                </Link>
                            </div>
                            20-30 WPM
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 p-1">
                        <div className={["rounded shadow bg-black p-1",styles.inner_level_box].join(" ")}>
                            <div className={styles.inner_level_title}>
                                <Link onClick={()=>setCooky("intermediate")} href={{ pathname: '/game/'}}>
                                    <h2>Intermediate</h2>
                                </Link>
                            </div>
                            30-50 WPM
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 p-1">
                        <div className={["rounded shadow bg-black p-1",styles.inner_level_box].join(" ")}>
                            <div className={styles.inner_level_title}>
                                <Link onClick={()=>setCooky("advanced")} href={{ pathname: '/game/'}}>
                                    <h2>Advanced</h2>
                                </Link>
                            </div>
                            50-70 WPM
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 p-1">
                        <div className={["rounded shadow bg-black p-1",styles.inner_level_box].join(" ")}>
                            <div className={styles.inner_level_title}>
                                <Link onClick={()=>setCooky("professional")} href={{ pathname: '/game/'}}>
                                    <h2>Professional</h2>
                                </Link>
                            </div>
                            70+ WPM
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default levels;
