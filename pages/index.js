import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import GoogleSignup from "../components/google_singin";

function Home() {
    return (
        <>
            <Head>
                <script
                    src="https://code.jquery.com/jquery-3.6.3.js"
                    integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
                    crossOrigin="anonymous"
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
                        <div
                            style={{
                                borderTop: "solid black 0.8px",
                                paddingTop: "20px",
                            }}
                        >
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
                    <a className="text-white" href="#">
                        TypingTest.com
                    </a>
                </div>
            </footer>
        </>
    );
}
export default Home;
