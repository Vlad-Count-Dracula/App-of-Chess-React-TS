import whiteKing from '../../assets/white-king.png';
import blackKing from '../../assets/black-king.png';
import { Figure, FigureNames } from "./Figure";
import { Cell } from '../Cell';
import { Color } from '../Collor';

export class King extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackKing : whiteKing;
        this.name = FigureNames.KING;
    }

    public canMove(target: Cell): boolean {

        const absX = Math.abs(target.x - this.cell.x);
        const absY = Math.abs(target.y - this.cell.y);

        if (!super.canMove(target))
            return false;
        if (((absX === 1 && absY === 1) || (absX === 0 && absY === 1) || (absX === 1 && absY === 0)))
            return true;
        if (this.cell.board.getCell(absY, absX).isEnemy(target) &&
            ((absX === 1 && absY === 1) ||
                (absX === 0 && absY === 1) ||
                (absX === 1 && absY === 0)))
            return true
        return false;
    }
};