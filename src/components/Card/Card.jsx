import "./Card.css";

const Card = ({ card, onClick }) => (
	<div
		className={`card ${card.isMatched ? "matched" : ""} ${card.isFlipped ? "flipped" : "back"}`}
		style={{ background: `${card.isFlipped ? card.value : ""}` }}
		onClick={() => onClick(card)}
		data-testid="card"
	></div>
);

export default Card;
