import Head from "next/head";
import Layout from "../components/layout";
import Script from "next/script";
import { useState } from "react";


export default function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(undefined)
    return (
        <>
            <Head>
                <title>Typing Test</title>
                {/* bootstrap */}

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                ></link>
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                    crossOrigin="anonymous"
                ></Script>
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                    crossOrigin="anonymous"
                ></Script>
            </Head>

            <Layout user={user}>
                <Component returnUser = {setUser} user={user}/>
            </Layout>
        </>
    );
}
