import styles from "../styles/game.module.css";
import { useState, useEffect } from "react";
import * as File from '../public/text'
import Cookies from 'js-cookie'

function game() {

    const level = Cookies.get("level")
   
    // to store current passage.

    const [passage, setPassage] = useState("");

    // to store a modified version of passage which is converted into jsx.

    const [converted, setConverted] = useState([]);

    /* if passage = "abc g"
            converted[0] = <div>
                            <p>a</p>
                            <p>b</p>
                            <p>c</p>
                        </div>
            converted[1] = <p>&nbsp;</p>
            converted[2] = <div><p>g</p></div>
    */

    const [totalTime, setTotalTime] = useState(0);
    const [wpm, setWpm] = useState(0);

    useEffect(() => {
        // selecting an array of passages according to the level(stored using cookies)
        let Text = File[level];

        let correctLetterCount = 0,
            time = 0;

        let index = Math.floor(Math.random() * Text.length);
        setPassage(Text[index]);

        // converting passage into jsx (<div><p>single letter</p></div>) format.

        let convertedPassage = []; // array to store modified passage.

        let temp = []; // to store each letter of a word, which is in a p tag.

        let wordIndex = 0; // to track where to insert next word.

        // iterating through each letter of the passage

        for (let index = 0; index < passage.length; index++) {
            let letter = passage[index];

            // if letter is not a space insert it make a p tag with it

            if (letter !== " ") {
                temp[index] = (
                    <p key={`passage_${index}`} id={`passage_${index}`}>
                        {letter}
                    </p>
                );
            } else {
                // if space, insert all the p tag to a div and store it in convertedPassage.

                convertedPassage[wordIndex++] = (
                    <div key={`word_${wordIndex}`} className="d-flex">
                        {temp}
                    </div>
                );

                // add space after each word

                convertedPassage[wordIndex++] = (
                    <p key={`passage_${index}`} id={`passage_${index}`}>
                        &nbsp;
                    </p>
                );

                // clearing contents of temp.

                temp = [];
            }
        }

        // inserting last word into convertedPassage, since there is no space after the last word.

        convertedPassage[wordIndex] = (
            <div key={`word_${wordIndex}`} className="d-flex">
                {temp}
            </div>
        );

        setConverted(convertedPassage);

        let firstKeyDown = true;
        let count = 0;
        const keyDownHandler = (e) => {
            if (e.key == "Backspace") {
                count = count > 0 ? count - 1 : 0;
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.color = "white";
                return;
            }

            // skip these keys

            if (
                e.key == "Shift" ||
                e.key === "CapsLock" ||
                e.key === "Control" ||
                count >= passage.length
            ) {
                return;
            }

            // on first keyDown start counting time in sec and calculate wpm(words per minute).

            if (firstKeyDown) {
                setInterval(
                    /* this function will be called on each second */
                    () => {
                        time = time + 1;
                        setTotalTime(time);

                        // letters typed per second.

                        let letterPerSec = correctLetterCount / time;

                        /* The "word" is an average of 5 characters.
                           To calculate WPM, simply take the number of words typed in a minute
                           with no typos and divide by five. For example, if you type 100 words
                           in a minute including spaces, your typing speed would be 20 WPM.
                           https://www.ratatype.com/typing-test/#:~:text=The%20most%20common,be%2020%20WPM.
                        */

                        //    5 letters == a word

                        let secPerWord = 5 / letterPerSec;
                        let wordPerMin = parseInt(60 / secPerWord);

                        // dinamic color change based on wpm

                        if (wordPerMin > 120) {
                            let bgTransition =
                                document.getElementById("main_game");
                            bgTransition.style.backgroundColor = `hsl(0, 100%, 40%)`;
                        } else {
                            let bgTransition =
                                document.getElementById("main_game");
                            bgTransition.style.backgroundColor = `hsl(${
                                120 - wordPerMin
                            }, 100%, 40%)`;
                        }

                        setWpm(wordPerMin);
                    },
                    1000 // 1000 ms == 1 s.
                );
            }
            firstKeyDown = false;

            // color change on each correct and wrong letter.

            let char = e.key;
            if (passage[count] != char) {
                let p_tag = document.getElementById(`passage_${count}`);
                if (passage[count] == " ") {
                    p_tag.style.backgroundColor = "#f66";
                } else {
                    p_tag.style.color = "#f66";
                }
            } else {
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.color = "rgb(163, 238, 175)";
                correctLetterCount++;
            }
            count++;
        };

        // focus on body by default(to start typing without clicking on the page).

        document.body.focus();

        // calling keyDownHandler (named function) on keydown

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            setConverted(null);
        };
    }, [passage]);

    return (
        <>
            <section className={styles.body}>
                <section className={`${styles.main}`} id="main_game">
                    <div className={[styles.passage, "text-wrap"].join(" ")}>
                        {converted}
                    </div>
                    <div className={[styles.wpm, "text-wrap"].join(" ")}>
                        <span>{wpm} wpm</span>
                    </div>
                </section>
            </section>
        </>
    );
}

export default game;
