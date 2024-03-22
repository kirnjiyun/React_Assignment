import React, { useState } from "react";
import Box from "./component/Box";
import styles from "./app.module.css";
import rock from "././img/rspImg/r/rock.png";
import scissors from "././img/rspImg/s/sci.png";
import paper from "././img/rspImg/p/bo.png";
const choices = {
    rock: {
        name: "rock",
        img: rock,
    },
    scissors: {
        name: "scissors",
        img: scissors,
    },
    paper: {
        name: "paper",
        img: paper,
    },
};

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState("");
    const [comResult, setComResult] = useState("");
    const play = (userChoice) => {
        setUserSelect(choices[userChoice]);
        let computerChoice = randomChoice();
        setComSelect(computerChoice);
        judgement(choices[userChoice], computerChoice);
    };
    const judgement = (user, com) => {
        let result;
        let comResult;
        if (
            (user.name === "rock" && com.name === "paper") ||
            (user.name === "paper" && com.name === "scissors") ||
            (user.name === "scissors" && com.name === "rock")
        ) {
            result = "졌다...";
            comResult = "이겼다!";
        } else if (
            (user.name === "rock" && com.name === "rock") ||
            (user.name === "paper" && com.name === "paper") ||
            (user.name === "scissors" && com.name === "scissors")
        ) {
            result = "비겼다";
            comResult = "비겼다";
        } else {
            result = "이겼다!";
            comResult = "졌다...";
        }
        setResult(result);
        setComResult(comResult);
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choices);
        let randomValue = Math.floor(Math.random() * 3);
        let final = itemArray[randomValue];
        return choices[final];
    };
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <Box title="Me" item={userSelect} result={result} />
                <Box title="Computer" item={comSelect} result={comResult} />
            </div>

            <div>
                <ul>
                    <li>
                        <button onClick={() => play("scissors")}>
                            <span>가위</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => play("rock")}>
                            <span>바위</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => play("paper")}>
                            <span>보</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default App;
