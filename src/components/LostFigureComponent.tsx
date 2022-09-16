import React, { FC } from "react";
import { Figure } from "../models/figure/Figure";

interface LostFifureProps {
    title : String,
    lostFigure : Figure[],
}

const LostFigureComponent: FC<LostFifureProps> = ({title , lostFigure}) => {
    return (
        <div className="lost">
            <h2>{title}</h2>
            {lostFigure.map(figure => 
            <React.Fragment key={figure.id}>
                <p>{figure.name}</p> : {figure.logo && <img width={20} height={20}  src={figure.logo} alt='someFigure'/>}
            </React.Fragment>
                )}
        </div>
    )
}

export default LostFigureComponent;