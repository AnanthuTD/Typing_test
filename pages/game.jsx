import React from 'react'
import Text from '../public/text'
import styles from '../styles/game.module.css'
import { useState, useEffect } from 'react'
function game() {
    
    const [passage, setPassage] = useState("")
    useEffect(() => {
        var index = Math.floor(Math.random() * (Text.length));
        setPassage(Text[index]);
    }, [])
    
  return (
    <>
        <section className={styles.body}>
            <section className={styles.main}>
                <div className={styles.outer_game}>
                    <p className={styles.text}>{passage}</p>
                </div>
            </section>
        </section>
    </>
  )
}

export default game