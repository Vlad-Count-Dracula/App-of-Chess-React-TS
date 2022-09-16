import { Cell } from "../Cell";
import { Color } from "../Collor";
import { Figure, FigureNames } from "./Figure";
import whiteBishop from '../../assets/white-bishop.png';
import blackBishop from '../../assets/black-bishop.png';

export class Bishop extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackBishop : whiteBishop;
        this.name = FigureNames.BISHOP;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.isEptyDiagonal(target))
            return true;
        return false;
    }
};