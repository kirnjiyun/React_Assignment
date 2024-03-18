import React, { useState } from "react";
import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import styles from "./app.module.css";

const choices = {
    rock: {
        name: "rock",
        img: "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg",
    },
    scissors: {
        name: "scissors",
        img: "https://ae01.alicdn.com/kf/Se816511cf4434f3db2474dc1620fcb48x/1Pc-Kawaii-Scissors-Korean-Fashion-Cute-Cartoon-Animal-Stationery-Scissors-DIY-Scrapbook-Cutting-Paper-Scissors-Student.jpg",
    },
    paper: {
        name: "paper",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqX4ioZz3vEaZC1UEiCzk8RWppkZdONEnyw&usqp=CAU",
    },
};

function App() {
    const [userSelect, setUserSelect] = useState("");
    const play = (userChoice) => {
        setUserSelect(choices[userChoice]);
    };
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <Box1 title="Me" item={userSelect} />
                <Box2 title="Computer" item={userSelect} />
            </div>

            <div>
                <ul>
                    <li>
                        <button onClick={() => play("scissors")}>
                            ✂️✂️가위✂️✂️
                        </button>
                    </li>
                    <li>
                        <button onClick={() => play("rock")}>
                            🪨🪨바위🪨🪨
                        </button>
                    </li>
                    <li>
                        <button onClick={() => play("paper")}>
                            ✋✋보✋✋
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default App;
