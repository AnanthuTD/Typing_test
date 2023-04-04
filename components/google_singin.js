import Script from "next/script";
import React from "react";

function google_singin({returnUserData}) {
    async function handleCredentialResponse(response) {
        await fetch("api/users/signup/google", { method: "POST", body:response.credential }).then((response)=>{
            return response.json()
        }).then((data)=>{
            if (data.status == 'success') {
                returnUserData(data.profile)
            } 
        })
    }
    React.useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" } // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    }, []);

    return (
        <>
            <Script
                src="https://accounts.google.com/gsi/client"
                strategy="beforeInteractive"
            ></Script>
            <div id="buttonDiv"></div>
        </>
    );
}

export default google_singin;
