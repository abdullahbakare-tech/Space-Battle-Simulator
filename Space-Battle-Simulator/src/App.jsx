import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const initialHealth = 100;
  const initialStatus = "dormant";

  const [playerHealth, setPlayerHealth] = useState(initialHealth);
  const [enemyHealth, setEnemyHealth] = useState(initialHealth);
  const [gameStatus, setGameStatus] = useState(initialStatus);

  function AttackPhase() {
    const playerAttack = Math.floor(Math.random() * 60) + 1;
    const enemyAttack = Math.floor(Math.random() + 60) + 1;

    const newPlayerHealth = Math.max(playerHealth - enemyAttack, 0);
    const newEnemyHealth = Math.max(enemyHealth - playerAttack, 0);

    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);

    if ((newPlayerHealth === 0) & (newEnemyHealth == 0)) {
      setGameStatus("draw");
    } else if (newEnemyHealth === 0) {
      setGameStatus("won");
    } else if (newPlayerHealth === 0) {
      setGameStatus("lose");
    }
  }
  function HandleResult() {
    switch (gameStatus) {
      case "won":
        return "Congrats! You won!";
      case "draw":
        return "Try again! It is a tie!";
      case "lost":
        return "Fail! Try agian.";
      default:
        return "Engage the enemy";
    }
  }
  function Restart() {
    setEnemyHealth(initialHealth);
    setPlayerHealth(initialHealth);
    setGameStatus(initialStatus);
  }

  function EmojiHealth(health) {
    let emoji;
    if (health === initialHealth) {
      emoji = "❤️";
    } else if (health === 0) {
      emoji = "☠️";
    } else {
      emoji = "❤️‍🩹";
    }

    return `${health} ${emoji}`;
  }

  return (
    <div className="MainPage">
      <div className="titleContainer">
        <h2>Space Battle Simulator</h2>
      </div>

      <div>
        <p>
          Player Health: <span> {EmojiHealth(playerHealth)}</span>
        </p>
      </div>

      <div className={"message-container"}>
        <p>{HandleResult()}</p>
      </div>
    </div>
  );
}

export default App;
