import { Figure } from './figure/Figure';
import { Rook } from './figure/Rook';
import { King } from './figure/King';
import { Cell } from "./Cell";
import { Color } from "./Collor";
import { Bishop } from "./figure/Bishop";
import { Pown } from "./figure/Pown";
import { Knight } from './figure/Knight';
import { Queen } from './figure/Queen';

export class Board {
    cells: Cell[][] = [];

    lostWhiteFigure: Figure[] = [];
    lostBlackFigure: Figure[] = [];


    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, i, j, Color.WHITE, false, null));
                } else {
                    row.push(new Cell(this, i, j, Color.BLACK, false, null));
                }
            }
            this.cells.push(row);
        }
    }

    public getCopyBoard(): Board {
        let newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigure = this.lostWhiteFigure;
        newBoard.lostBlackFigure = this.lostBlackFigure;
        return newBoard;
    }

    public highLightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                let target = row[j];
                target.evailable = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addPowns() {
        for (let i = 0; i < 8; i++) {
            new Pown(this.getCell(i, 1), Color.BLACK)
            new Pown(this.getCell(i, 6), Color.WHITE)
        }
    }

    private addKing() {
        new King(this.getCell(4, 0), Color.BLACK)
        new King(this.getCell(4, 7), Color.WHITE)
    }

    private addKnight() {
        new Knight(this.getCell(1, 0), Color.BLACK)
        new Knight(this.getCell(6, 0), Color.BLACK)
        new Knight(this.getCell(1, 7), Color.WHITE)
        new Knight(this.getCell(6, 7), Color.WHITE)
    }

    private addQueen() {
        new Queen(this.getCell(3, 0), Color.BLACK)
        new Queen(this.getCell(3, 7), Color.WHITE)

    }

    private addRook() {
        new Rook(this.getCell(0, 0), Color.BLACK)
        new Rook(this.getCell(7, 0), Color.BLACK)
        new Rook(this.getCell(0, 7), Color.WHITE)
        new Rook(this.getCell(7, 7), Color.WHITE)
    }

    private addBishop() {
        new Bishop(this.getCell(2, 0), Color.BLACK)
        new Bishop(this.getCell(5, 0), Color.BLACK)
        new Bishop(this.getCell(2, 7), Color.WHITE)
        new Bishop(this.getCell(5, 7), Color.WHITE)
    }

    public addFigure() {
        this.addPowns();
        this.addKing();
        this.addKnight();
        this.addQueen();
        this.addRook();
        this.addBishop();
    }
}