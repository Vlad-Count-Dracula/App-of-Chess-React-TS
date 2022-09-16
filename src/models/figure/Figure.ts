import logo from '../../assets/black-bishop.png';
import { Cell } from '../Cell';
import { Color } from '../Collor';

export enum FigureNames {
    FIGURE = 'Figure',
    BISHOP = 'Bishop',
    KING = 'King',
    KNIGHT = 'Knight',
    PAWN = 'Pawn',
    QUEEEN = 'Queen',
    ROOK = 'Rook',
};

export class Figure {
    name: FigureNames;
    logo: typeof logo | null;
    color: Color;
    cell: Cell;
    id: number;

    constructor(cell: Cell, color: Color) {
        this.cell = cell;
        this.cell.figure = this;
        this.color = color;
        this.logo = logo;
        this.id = Math.random();
        this.name = FigureNames.FIGURE;
    }

    public canMove(target: Cell): boolean {
        if (target.figure?.color === this.color)
            return false
        if (target.figure?.name === FigureNames.KING)
            return false
        return true
    }

    moveFigure(target: Cell) { };
};