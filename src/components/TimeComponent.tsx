import { FC, useEffect, useRef, useState } from "react";
import { Color } from "../models/Collor";
import { Player } from "../models/Player";

interface TimeProps {
    currentPlayer: Player | null,
    restart: () => void,
}

const Time: FC<TimeProps> = ({ currentPlayer, restart }) => {

    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect( () => {
        startTimer()
    } , [currentPlayer])

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }

        const callBack = currentPlayer?.color === Color.WHITE ? decrementWhiteTime : decrementBlackTime;
        timer.current = setInterval(callBack , 1000)
    }

    function decrementBlackTime() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTime() {
        setWhiteTime(prev => prev - 1);
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    }


    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
            <h2>Black - {blackTime}</h2>
            <h2>White - {whiteTime}</h2>
        </div>
    )
};

export default Time;