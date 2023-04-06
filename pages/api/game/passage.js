import * as File from "../../../public/text"
export default function handler(req, res) {
    let { level } = req.query;
    let Text = File[level]
    let index = Math.floor(Math.random() * Text.length);
    console.log(Text[index]);
    
}
