import React from "react";
import styles from "./box1.module.css";

const Box2 = (props) => {
    console.log(props.result);
    const boxStyle = {
        border:
            props.result === "짐"
                ? "2px solid red"
                : props.result === "이김"
                ? "2px solid green"
                : "",
    };
    return (
        <div className={styles.box} style={boxStyle}>
            <h1>{props.title}</h1>
            <img className={styles.img} src={props.item && props.item.img} />
            <h2>{props.result}</h2>
        </div>
    );
};
export default Box2;
