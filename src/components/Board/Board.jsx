import Card from "../Card/Card.jsx";

const Board = ({ cards, handleCardClick }) => {
	return (
		<div className="board">
			<table>
				<tbody>
					{[0, 1, 2, 3].map(row => (
						<tr key={row}>
							{[0, 1, 2, 3].map(col => {
								const card = cards[row * 4 + col];
								return (
									<td key={col}>
										<Card card={card} onClick={handleCardClick} />
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Board;
