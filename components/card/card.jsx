import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
    const { value, onRemove, className } = props
    return (
        <div className={`${styles.card} ${className}`}>
            <button className={styles.removeBTN} type="button" onClick={onRemove}/>
            <p className={styles.cardContent}>{value}</p>
        </div>
    )
}

export default Card;