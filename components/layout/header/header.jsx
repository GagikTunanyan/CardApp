import React, { memo, useContext } from "react";
import styles from "./header.module.css";
import { Actions } from "../../../contexts/actions.context";

const Header = () => {
    const { addCard, sortCard, sorted, clear } = useContext(Actions);
    
    return (
        <header className={styles.header}>
            <button
                type="button"
                className={styles.actionBTN}
                onClick={addCard}
            >
                add card
            </button>
            <button
                type="button"
                className={`${styles.actionBTN} ${!!sorted ? styles.actionBTNActive : ""}`}
                onClick={sortCard}
            >
                sort cards
            </button>
            <button
                type="button"
                className={styles.actionBTN}
                onClick={clear}
            >
                clear all
            </button>
        </header>
    )
}

export default memo(Header)