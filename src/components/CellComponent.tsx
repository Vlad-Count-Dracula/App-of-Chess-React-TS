import { Cell } from "../models/Cell"


interface CellProps {
    cell: Cell,
    selected: boolean,
    clickSelected: (cell: Cell) => void,
}

export const CellComponent = ({ cell, selected, clickSelected }: CellProps) => {
    return (
        <div onClick={() => clickSelected(cell)}
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            style={{ background: cell.figure && cell.evailable ? 'green' : '' }}>

            {cell.evailable && !cell.figure && <div className={'available'} />}

            {cell.figure?.logo && <img src={cell.figure.logo} alt='some figure' />}

        </div>
    )
}