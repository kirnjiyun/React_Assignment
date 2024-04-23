import React from "react";
import styles from "../app.module.css";

interface ChoiceButtonProps {
    choice: string;
    play: (choice: string) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, play }) => {
    return (
        <li className={styles.li}>
            <button className={styles.button} onClick={() => play(choice)}>
                <span>{choice}</span>
            </button>
        </li>
    );
};

export default ChoiceButton;
