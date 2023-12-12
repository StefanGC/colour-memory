import "./Congratulations.css";

const Congratulations = ({ onRestart }) => {
	return (
		<main className="main">
			<div className="congratulations">
				<p>Congratulation, you won</p>
				<button onClick={onRestart}>Play again</button>
			</div>
		</main>
	);
};

export default Congratulations;
