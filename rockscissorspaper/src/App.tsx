import React, { useState } from "react";
import Box from "./component/Box";
import ChoiceButton from "./component/ChoiceButton";
import styles from "./app.module.css";
import rock from "././img/rspImg/r/rock.png";
import scissors from "././img/rspImg/s/sci.png";
import paper from "././img/rspImg/p/bo.png";

interface Choice {
    name: string;
    img: string;
}

interface Choices {
    [key: string]: Choice;
}

const choices: Choices = {
    바위: { name: "바위", img: rock },
    가위: { name: "가위", img: scissors },
    보: { name: "보", img: paper },
};

function App() {
    const [userSelect, setUserSelect] = useState<Choice | null>(null);
    const [comSelect, setComSelect] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>("");
    const [comResult, setComResult] = useState<string>("");

    const play = (userChoice: string) => {
        setUserSelect(choices[userChoice]);
        let computerChoice = randomChoice();
        setComSelect(computerChoice);
        judgement(choices[userChoice], computerChoice);
    };

    const judgement = (user: Choice, com: Choice) => {
        let result: string;
        let comResult: string;

        if (
            (user.name === "바위" && com.name === "보") ||
            (user.name === "보" && com.name === "가위") ||
            (user.name === "가위" && com.name === "바위")
        ) {
            result = "졌다...";
            comResult = "이겼다!";
        } else if (
            (user.name === "바위" && com.name === "바위") ||
            (user.name === "보" && com.name === "보") ||
            (user.name === "가위" && com.name === "가위")
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
            <ul className={styles.ul}>
                <ChoiceButton choice="가위" play={play} />
                <ChoiceButton choice="바위" play={play} />
                <ChoiceButton choice="보" play={play} />
            </ul>
        </div>
    );
}

export default App;
