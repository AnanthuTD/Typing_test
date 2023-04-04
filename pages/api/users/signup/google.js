import { verify } from "./google_auth";
import prisma from "../../../../lib/prisma";

export default async function signup(req, res) {
    if (req.method == "POST") {
        let credential = req.body;
        let profile = {};
        await verify(credential)
            .then((payload) => {
                profile = {
                    email: payload.email,
                    name: payload.name,
                    picture: payload.picture,
                };
                try {
                    prisma.user.create({
                        data: profile,
                    });
                } catch (error) {
                    res.json({ status: error.code });
                }
            })
            .catch((err) => {
                warn.log("err on validating creditials (jws tokens) : ");
                console.error(err);
                res.json({ status: "invalid" });
            });

        res.json({ status: "success", 'profile': profile });
    } else {
    }
}
