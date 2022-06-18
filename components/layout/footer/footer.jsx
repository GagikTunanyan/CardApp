import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>Footer</footer>
    )
}

export default memo(Footer)