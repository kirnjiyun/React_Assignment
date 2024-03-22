import React from "react";
import styles from "./box.module.css";
import nothing from "../img/가위바위보이미지/nothing.png";

const Box2 = (props) => {
    console.log(props.result);
    const boxStyle = {
        border:
            props.result === "짐"
                ? "20px solid                #ef5774"
                : props.result === "이김"
                ? "20px solid #9ed29e"
                : "",
    };
    return (
        <div className={styles.box} style={boxStyle}>
            <h1>{props.title}</h1>
            {props.item && props.item.img ? (
                <img className={styles.img} src={props.item.img} alt="" />
            ) : (
                <img
                    className={styles.img}
                    src={nothing}
                    alt="아직 안 정했을때 이미지"
                />
            )}
            <h2>{props.result}</h2>
        </div>
    );
};

export default Box2;
