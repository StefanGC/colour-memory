import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from '../components/Game/Game';

const mockAddScore = jest.fn();
const mockAddAttempts = jest.fn();
const mockReset = jest.fn();
const mockSetRestart = jest.fn();
const mockSolved = jest.fn();

test('renders the Game component', () => {
    render(
        <Game
            addScore={mockAddScore}
            addAttempts={mockAddAttempts}
            reset={false}
            setRestart={mockSetRestart}
            solved={mockSolved}
        />
    );
    const gameElement = screen.getByTestId('game');
    expect(gameElement).toBeInTheDocument();
});
