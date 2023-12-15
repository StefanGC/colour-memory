import { useContext } from "react";
import GameContext from "../../MyContext";
import "./Statistics.css";

const Statistics = ({ onRestart }) => {
	const gameData = useContext(GameContext);
	return (
		<aside className="sidebar">
			<div className="stats-container">
				<div className="element">
					{Math.floor(gameData.timer / 60)} : {gameData.timer % 60}
				</div>
				<div className="element">Score: {gameData.score} / 8</div>
				<div className="element">Attempts: {gameData.attempts}</div>
				<button onClick={onRestart}>Reset</button>
			</div>
		</aside>
	);
};

export default Statistics;
