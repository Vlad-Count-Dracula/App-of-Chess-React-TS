import { Cell } from "../Cell";
import { Color } from "../Collor";
import { Figure, FigureNames } from "./Figure";
import whiteRook from '../../assets/white-rook.png';
import blackRook from '../../assets/black-rook.png';

export class Rook extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackRook : whiteRook;
        this.name = FigureNames.ROOK;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.isEmptyVertical(target))
            return true;
        if (this.cell.isEmptyHoryzontal(target))
            return true;
        return false;
    }
};