import "./Statistics.css";

const Statistics = ({ timer, score, attempts, onRestart }) => {
	return (
		<aside className="sidebar">
			<div className="stats-container">
				<div className="element">
					{Math.floor(timer / 60)} : {timer % 60}
				</div>
				<div className="element">Score: {score} / 8</div>
				<div className="element">Attempts: {attempts}</div>
				<button onClick={onRestart}>Reset</button>
			</div>
		</aside>
	);
};

export default Statistics;
