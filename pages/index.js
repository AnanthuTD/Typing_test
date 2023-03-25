import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import React from "react";
import Script from "next/script";
import GoogleSignup from "../components/google_singin";

export default function Home() {
    // to change color of link in nav according to page in which it is in.

    const router = useRouter();
    const a_home = {
        color: router.pathname === "/" ? "red" : "aliceblue",
    };
    const a_high_score = {
        color:
            router.pathname === "/high-score" ? "red" : "aliceblue",
    };
    const a_about = {
        color: router.pathname === "/about" ? "red" : "aliceblue",
    };

    return (
        <>
            <Head>
                <title>Typing Test</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossorigin="anonymous"
                />
                <script
                    src="https://code.jquery.com/jquery-3.6.3.js"
                    integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
                    crossorigin="anonymous"
                ></script>
                {/* <!-- Font Awesome --> */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />
                {/* <!-- Google Fonts --> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
                {/* <!-- MDB --> */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.body_bg}>
                <nav
                    className={`navbar ${styles.navbar_light} ${styles.bg_light} d-flex justify-content-start`}
                >
                    <span
                        className={`${styles.navbar_brand} h1 ${styles.head} mx-3`}
                    >
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
                <div
                    className={`${styles.Home} container-fluid d-flex justify-content-center align-items-center`}
                    id="mainbody"
                >
                    <div>
                        <form>
                            <div className="d-flex mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-outline-success"
                                >
                                    Submit
                                </button>
                            </div>
                            <div style={{borderTop:"solid black 0.8px", paddingTop: "20px"}}>
                            <GoogleSignup />
                            </div>
                        </form>
                    </div>
                </div>
                <footer
                    className={`mt-auto mb-0 ${styles.footer} text-center text-white`}
                >
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#dd4b39" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-google"></i>
                            </a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#0082ca" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#333333" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </section>
                    </div>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2020 Copyright:
                        <a
                            className="text-white"
                            href="https://mdbootstrap.com/"
                        >
                            TypingTest.com
                        </a>
                    </div>
                </footer>
            </div>
            {/* <!-- MDB --> */}
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
            ></script>
            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossOrigin="anonymous"
            ></script>
            <Script
                src="https://accounts.google.com/gsi/client"
                async
                defer
            ></Script>
        </>
    );
}
