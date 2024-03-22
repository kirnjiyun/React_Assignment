import React from "react";
import styles from "./box.module.css";
import nothing from "../img/rspImg/nothing.png";

function Box(props) {
    let boxClass = "";
    if (props.result === "이겼다!") {
        boxClass = styles.win;
    } else if (props.result === "졌다...") {
        boxClass = styles.lose;
    } else {
        boxClass = styles.tie;
    }
    return (
        <div className={`${styles.box} ${boxClass}`}>
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
}

export default Box;
