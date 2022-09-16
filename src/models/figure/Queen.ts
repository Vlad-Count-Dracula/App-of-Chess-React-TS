import { Cell } from "../Cell";
import { Color } from "../Collor";
import { Figure, FigureNames } from "./Figure";
import whiteQueen from '../../assets/white-queen.png';
import blackQueen from '../../assets/black-queen.png';

export class Queen extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackQueen : whiteQueen;
        this.name = FigureNames.QUEEEN;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHoryzontal(target))
            return true;
        if(this.cell.isEptyDiagonal(target))
            return true;
        return false
    }
};