import { Color } from './../Collor';
import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackPown from '../../assets/black-pawn.png';
import whitePown from '../../assets/white-pawn.png';

export class Pown extends Figure {

    isFirstStep : boolean = true;

    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackPown : whitePown;
        this.name = FigureNames.PAWN;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === Color.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Color.BLACK ? 2 : -2;

        if((target.x === this.cell.x + direction || (this.isFirstStep 
        && target.x === this.cell.x + firstStepDirection))
        && target.y === this.cell.y 
        && this.cell.board.getCell(target.y , target.x).isEmpty()) {
            return true
        }

        if(target.x === this.cell.x + direction 
            && (target.y === this.cell.y + direction || target.y === this.cell.y - direction)
            && this.cell.isEnemy(target)) {
                return true
            }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
};