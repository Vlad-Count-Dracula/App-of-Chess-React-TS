import { Board } from "./Board"
import { Color } from "./Collor"
import { Figure } from "./figure/Figure"

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    board: Board;
    figure: Figure | null;
    evailable: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Color, evailable: boolean, figure: null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.evailable = evailable;
        this.figure = figure;
        this.id = Math.random();
    }

    isEmpty() {
        return this.figure === null
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure.color;
        }
        return false
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(this.y, x).isEmpty()) {
                return false
            }
        }
        return true;
    }

    isEmptyHoryzontal(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(y, this.x).isEmpty()) {
                return false
            }
        }
        return true;
    }

    isEptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.y - this.y);
        const absY = Math.abs(target.x - this.x);

        if (absY !== absX)
            return false;

        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.y + dy * i, this.x + dx * i).isEmpty())
                return false;
        }
        return true
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    addLostFigure(target: Figure) {
        target.color === Color.WHITE ? 
        this.board.lostWhiteFigure.push(target) :
        this.board.lostBlackFigure.push(target);
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            if (target.figure) {
                this.addLostFigure(target.figure)
            }
            target.setFigure(this.figure);
            this.figure = null;
        }
    }

}