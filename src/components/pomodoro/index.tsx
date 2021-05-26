import React, {useState} from "react";
import { Controls } from "../";

type PomodoroProps={}

export const Pomodoro = ({ }: PomodoroProps) => {
    const [test, useTest] = useState(2);
    return (
        <div>
            Pomodoro comes here.
        </div>
    )
}
    
