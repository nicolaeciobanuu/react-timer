import { useState } from "react";

export const Pomodoro = (props) => {
    //Delcaring state
    const [selectedType, setSelectedType] = useState(props.types[0]);
    const [time, setTime] = useState(props.types[0].time);
    const [interval, setInterval] = useState(null);
    const [running, setRunning] = useState(false);

    return(
        <div>
            Pomodoro here
        </div>)
}