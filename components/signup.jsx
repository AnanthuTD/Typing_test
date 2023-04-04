import GoogleSignup from "./google_singin";
function signup({ returnUserData }) {
    return (
        <div>
            <form>
                <div className="d-flex mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="email"
                    />
                    <button type="submit" className="btn btn-outline-success">
                        Submit
                    </button>
                </div>
                <div
                    style={{
                        borderTop: "solid black 0.8px",
                        paddingTop: "20px",
                    }}
                >
                    <GoogleSignup returnUserData={returnUserData} />
                </div>
            </form>
        </div>
    );
}
export default signup;
