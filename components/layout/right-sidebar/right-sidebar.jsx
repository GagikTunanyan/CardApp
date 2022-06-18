import React, { memo } from "react";
import styles from "./right-sidebar.module.css";

const RightSidebar = (props) => {
    const { children } = props;
    return (
        <div className={styles.parentSidebar}>{children}</div>
    )
}

export default memo(RightSidebar);