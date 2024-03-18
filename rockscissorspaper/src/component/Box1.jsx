import React from "react";
import styles from "./box1.module.css";

const Box1 = (props) => {
    return (
        <div className={styles.box}>
            <h1>{props.title}</h1>
            <img className={styles.img} src={props.item && props.item.img} />
            <h2>win</h2>
        </div>
    );
};

export default Box1;
