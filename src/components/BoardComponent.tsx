import React, { useEffect, useState } from "react"
import { Board } from "../models/Board"
import { Cell } from "../models/Cell"
import { Player } from "../models/Player"
import { CellComponent } from "./CellComponent"

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
    carrentPlayer: Player | null,
    swapPlayer: () => void,
}

export const BoardComponent = ({ board, setBoard, carrentPlayer, swapPlayer }: BoardProps) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function clickSelected(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            swapPlayer();
        } else {
            if (cell.figure?.color === carrentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }

    useEffect(() => {
        highLightCells()
    }, [selectedCell]);

    function highLightCells() {
        board.highLightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        let newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <h2>Carrent Player is {carrentPlayer?.color}</h2>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent cell={cell} key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                clickSelected={clickSelected} />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}