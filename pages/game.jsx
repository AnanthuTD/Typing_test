import React from "react";
import Text from "../public/text";
import styles from "../styles/game.module.css";
import { useState, useEffect } from "react";
function game() {
    const [passage, setPassage] = useState("");
    const [converted, setConverted] = useState();
    let correctLetterCount = 0;
    // total time in seconds
    const [totalTime, setTotalTime] = useState(0);
    const [wpm, setWpm] = useState(0);

    useEffect(() => {
        let time = 0;
        var index = Math.floor(Math.random() * Text.length);
        setPassage(Text[index]);
        let str = [];
        for (let index = 0; index < passage.length; index++) {
            let element = passage[index];
            if (element == " ")
                str[index] = (
                    <p key={`passage_${index}`} id={`passage_${index}`}>
                        &nbsp;
                    </p>
                );
            else
                str[index] = (
                    <p key={`passage_${index}`} id={`passage_${index}`}>
                        {element}
                    </p>
                );
        }
        setConverted(str);
        let firstKeyDown = true;
        let count = 0;
        const keyDownHandler = (e) => {
            if (e.key == "Backspace") {
                count = count > 0 ? count - 1 : 0;
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "transparent";
                return;
            }
            /*  let char_code = e.key.charCodeAt(0)
            if (
                (char_code < 65 ||char_code > 90) &&
                (char_code < 97 ||char_code > 122) &&
                (char_code < 48 || char_code > 57) 
            ) {
                return;
            }
            console.log(e.key.charCodeAt(0)); */
            if (
                e.key == "Shift" ||
                e.key === "CapsLock" ||
                e.key === "Control" ||
                count >= passage.length
            ) {
                return;
            }

            if (firstKeyDown) {
                setInterval(() => {
                    time = time + 1;
                    setTotalTime(time);
                    let letterPerSec = correctLetterCount / time;
                    let secPerWord = 5 / letterPerSec;
                    let wordPerMin = parseInt(60 / secPerWord);
                    setWpm(wordPerMin);
                }, 1000);
            }
            firstKeyDown = false;
            let char = e.key;

            if (passage[count] != char) {
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "#f66";
            } else {
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "rgb(163, 238, 175)";

                correctLetterCount++;
            }
            count++;
        };

        document.body.focus();
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            setConverted(null);
        };
    }, [passage]);

    return (
        <>
            <section className={styles.body}>
                <section className={styles.main}>
                    <div className={styles.outer_game}>{converted}</div>
                </section>
                <h1 style={{ color: "red" }}>{totalTime}</h1>
                <h1 style={{ color: "yellow" }}>{wpm}</h1>
            </section>
        </>
    );
}

export default game;
