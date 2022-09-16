import { Cell } from "../Cell";
import { Color } from "../Collor";
import { Figure, FigureNames } from "./Figure";
import whiteKnight from '../../assets/white-knight.png';
import blackKnight from '../../assets/black-knight.png';

export class Knight extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackKnight : whiteKnight;
        this.name = FigureNames.KNIGHT;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const dx = Math.abs(this.cell.y - target.y);
        const dy = Math.abs(this.cell.x - target.x);
        return (dy === 1 && dx === 2) || (dy === 2 && dx === 1);
    }
};