import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../components/Card/Card';

test('renders a card with the back class when not flipped', () => {
    const card = { id: 0, value: 'red', isFlipped: false, isMatched: false };
    render(<Card card={card} />);
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('back');
    expect(cardElement).not.toHaveClass('flipped');
});

test('renders a card with the flipped class when flipped', () => {
    const card = { id: 0, value: 'red', isFlipped: true, isMatched: false };
    render(<Card card={card} />);
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('flipped');
    expect(cardElement).not.toHaveClass('back');
});

test('renders a matched card with the matched class', () => {
    const card = { id: 0, value: 'red', isFlipped: false, isMatched: true };
    render(<Card card={card} />);
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('back');
    expect(cardElement).toHaveClass('matched');
});

test('calls onClick when card is clicked', () => {
    const card = { id: 0, value: 'red', isFlipped: false, isMatched: false };
    const onClick = jest.fn();
    render(<Card card={card} onClick={onClick} />);
    const cardElement = screen.getByTestId('card');

    fireEvent.click(cardElement);
    expect(onClick).toHaveBeenCalledWith(card);
});

test('renders a card with a value as background when flipped', () => {
    const card = { id: 0, value: 'red', isFlipped: true, isMatched: false };
    render(<Card card={card} />);
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).not.toHaveClass('back');
    expect(cardElement).toHaveClass('flipped');
    expect(cardElement).toHaveStyle('background: red');
});

test('does not flipp a car when a matched card is clicked', () => {
    const card = { id: 0, value: 'red', isFlipped: false, isMatched: true };
    const onClick = jest.fn();
    render(<Card card={card} onClick={onClick} />);
    const cardElement = screen.getByTestId('card');

    fireEvent.click(cardElement);
    expect(cardElement).not.toHaveClass('flipped');
});