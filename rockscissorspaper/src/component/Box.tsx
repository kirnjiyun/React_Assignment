import React from "react";
import styles from "./box.module.css";
import nothing from "../img/rspImg/nothing.png";

// Props 타입 정의
interface BoxProps {
    title: string;
    result: "이겼다!" | "졌다..." | "비겼다";
    item?: {
        img: string;
        name: string;
    };
}

function Box({ title, result, item }: BoxProps) {
    let boxClass = "";
    if (result === "이겼다!") {
        boxClass = styles.win;
    } else if (result === "졌다...") {
        boxClass = styles.lose;
    } else {
        boxClass = styles.tie;
    }
    return (
        <div className={`${styles.box} ${boxClass}`}>
            <h1>{title}</h1>
            {item && item.img ? (
                <img className={styles.img} src={item.img} alt="" />
            ) : (
                <img
                    className={styles.img}
                    src={nothing}
                    alt="아직 안 정했을때 이미지"
                />
            )}
            {item && item.name ? <h2>{`${item.name}로 ${result}`}</h2> : null}
        </div>
    );
}

export default Box;
