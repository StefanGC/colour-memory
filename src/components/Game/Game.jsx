import { useState, useEffect } from "react";
import Board from "../Board/Board.jsx";
import "./Game.css";

const generateCards = () => {
	const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];
	const cards = colors.concat(colors).sort(function () {
		return Math.random() - 0.5;
	});
	return cards.map((value, index) => ({ id: index, value, isFlipped: false, isMatched: false }));
};

const Game = ({ addScore, addAttempts, reset, setRestart, solved }) => {
	const [cards, setCards] = useState(generateCards());
	const [selectedCards, setSelectedCards] = useState([]);

	useEffect(() => {
		console.log(cards);
	}, []);

	useEffect(() => {
		if (reset) {
			setSelectedCards([]);
			setCards(generateCards());
			setRestart();
		}
	}, [reset]);

	useEffect(() => {
		if (selectedCards.length === 2) {
			const [card1, card2] = selectedCards;
			if (card1.value === card2.value) {
				card1.isMatched = true;
				card2.isMatched = true;
				addScore(1);
			} else {
				addScore(-1);
			}
			addAttempts();
			setTimeout(() => {
				card1.isFlipped = false;
				card2.isFlipped = false;
				setSelectedCards([]);
				setCards([...cards]);
				if (countMatchedCards(cards) === cards.length) solved();
			}, 2000);
		}
	}, [selectedCards, cards]);

	const handleCardClick = card => {
		if (!card.isMatched && !card.isFlipped && selectedCards.length < 2) {
			card.isFlipped = true;
			setSelectedCards([...selectedCards, card]);
			setCards([...cards]);
		}
	};

	const countMatchedCards = cards => {
		return cards.reduce((count, card) => {
			return card.isMatched ? count + 1 : count;
		}, 0);
	};

	return (
		<main className="main" data-testid="game">
			<div className="game-container">
				<div className="game">
					<Board cards={cards} handleCardClick={handleCardClick} />
				</div>
			</div>
		</main>
	);
};

export default Game;
