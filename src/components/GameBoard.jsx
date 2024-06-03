import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function fnsetGameBoard (rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymol;
            return updatedBoard;
        })

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, indexRow) => (
                <li key={indexRow}>
                    <ol>
                        {row.map((playerSymbol, indexCol) => (
                            <li key={indexCol}>
                                <button onClick={() => fnsetGameBoard(indexRow, indexCol)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}