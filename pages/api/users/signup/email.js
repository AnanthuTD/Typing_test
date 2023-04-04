import validateEmail from "./validate_email";

export default async function signup(req, res) {
    if (req.method == "POST") {
        let email = req.body;
        if (!validateEmail(email)) {
           res.json({status: "invalid"})
          }
        let username = email.split("@")[0];
        let profile = {
            email: email,
            name: username,
            picture: "/default-user.png"
        };
        try {
            prisma.user.create({
                data: profile,
            });
        } catch (error) {
            res.json({ status: error.code });
        }

        res.json({ status: "success", profile: profile });
    } else {
    }
}
