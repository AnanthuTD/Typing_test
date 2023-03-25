import React from "react";

function google_singin() {
    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    React.useEffect(() => {
        google.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID",
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
            <script
                src="https://accounts.google.com/gsi/client"
                async
                defer
            ></script>
            <div id="buttonDiv"></div>
        </>
    );
}

export default google_singin;
