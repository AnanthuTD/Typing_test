import React from "react";
import Text from "../public/text";
import styles from "../styles/game.module.css";
import { useState, useEffect } from "react";
function game() {
    const [passage, setPassage] = useState("");
    const [converted, setConverted] = useState();

    useEffect(() => {
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
        let count = 0;
        const keyDownHandler = (e) => {
            if (e.key == "Backspace") {
                count = count > 0 ? count - 1 : 0;
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "transparent";
                return;
            }
            console.log(`You pressed ${e.key}.`);
            if (
                e.key == "Shift" ||
                e.key === "CapsLock" ||
                e.key === "Control" ||
                count >= passage.length
            ) {
                return;
            }
            if (
                (e.key < "A" || e.key > "Z") &&
                (e.key < "a" || e.key > "z") &&
                (e.key < "0" || e.key > "9")
            ) {
                return;
            }

            let char = e.key;

            if (passage[count] != char) {
                console.log("count = ", count);
                let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "#f66";}
                else{
                    let p_tag = document.getElementById(`passage_${count}`);
                p_tag.style.backgroundColor = "rgb(163, 238, 175)";
                }
            count++;
        }
       
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
            </section>
        </>
    );
}

export default game;
