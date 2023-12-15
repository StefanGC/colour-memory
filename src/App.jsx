import { useState, useEffect } from "react";
import GameContext from "./MyContext.js";
import Header from "./components/Header/Header.jsx";
import Game from "./components/Game/Game.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Congratulations from "./components/Congratulations/Congratulations.jsx";
import "./App.css";

function App() {
	const [seconds, setSeconds] = useState(0);
	const [attempts, setAttempts] = useState(0);
	const [score, setScore] = useState(0);
	const [solved, setSolved] = useState(false);
	const [restart, setRestart] = useState(false);

	const gameData = {
		timer: seconds,
		attempts: attempts,
		score: score,
		solved: solved,
	};

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(timerInterval);
	}, []);

	const addAttemptsHandler = () => {
		setAttempts(prevAttempts => prevAttempts + 1);
	};

	const addScoreHandler = newScore => {
		setScore(prevScore => prevScore + newScore);
	};

	const handleRestart = () => {
		setSeconds(0);
		setAttempts(0);
		setScore(0);
		setSolved(false);
		setRestart(true);
	};

	return (
		<GameContext.Provider value={gameData}>
			<div className="app">
				<Header />
				{!solved ? (
					<Game
						addScore={addScoreHandler}
						addAttempts={addAttemptsHandler}
						reset={restart}
						setRestart={() => setRestart(false)}
						solved={() => setSolved(true)}
					/>
				) : (
					<Congratulations onRestart={handleRestart} />
				)}
				<Statistics onRestart={handleRestart} />
			</div>
		</GameContext.Provider>
	);
}

export default App;
