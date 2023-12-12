import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Game from "./components/Game/Game.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Congratilations from "./components/Congratulations/Congratulations.jsx";
import "./App.css";

function App() {
	const [seconds, setSeconds] = useState(0);
	const [attempts, setAttempts] = useState(0);
	const [score, setScore] = useState(0);
	const [solved, setSolved] = useState(false);
	const [restart, setRestart] = useState(false);

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
				<Congratilations onRestart={handleRestart} />
			)}
			<Statistics timer={seconds} attempts={attempts} score={score} onRestart={handleRestart} />
		</div>
	);
}

export default App;
