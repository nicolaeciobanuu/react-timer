import React, {useState, useEffect} from "react";
import { start } from "repl";
import { Controls } from "../";
import { Shortcuts } from "../";
import { TypeSelect } from "../";
import { TimeDisplay } from "../";
import { SC } from "../";

const props =   {
    types: [
        { name: "Pomodoro", time: 1500 },
        { name: "Short Break", time: 300 },
        { name: "Long Break", time: 900 },
    ]
}

export const Pomodoro = () => {

    const [selectedType, setSelectedType] = useState(props.types[0]);
    const [time, setTime] = useState(props.types[0].time);
    const [running, setRunning] = useState(false);
    const [int, setInt]: any = useState(null);//interval
    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);
        Notification.requestPermission();
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        }
    },[])
    const handleKeyUp = (event): void => {
        //Handling number shortcuts
        if (event.key >= 1 && event.key <= props.types.length) {
            changeType(props.types[event.key - 1]);
        }
    };
    const changeType = ( type ): void => {
        resetTimer();
        setSelectedType(type);
        setTime(type.time);
        setRunning(false);
    }
    const tick = () : void => {
        if (time <= 1) {
            stopInterval();
            setRunning(false);
            try {
                navigator.serviceWorker.register("service-worker.js").then(sw => {
                    sw.showNotification(`${selectedType.name} finished!`);
                })
            }
            catch (e) {
                console.log("Notification error", e);
            }
        }
        setTime(time=>time - 1);
    }
    const stopInterval = (): void => {
        clearInterval(int);
        setInt(null);
    }
    const startTimer = (): void => {
        setRunning(true);
        setInt(setInterval(tick ,1000));
        setTime(time > 0 ? time : selectedType.time);
    }
    const resetTimer = (): void => {
        stopInterval();
        setTime(selectedType.time);
        setRunning(false);
    }
    const pauseTimer = (): void => {
        int ? stopInterval() : startTimer();
    }
    const getStatus = () : any => {
        if (time === 0) return "Finished";
        if (running && !int) return "Paused";
        if (running) return "Running";
    }
    const getProgress = (): number => {
        return ((selectedType.time - time) / selectedType.time) * 100;
    }
    return (
        <SC.PomodoroContent>
            <SC.Pomodoro>
                    <TypeSelect
                        types={props.types}
                        selected={selectedType}
                        changeType={changeType}
                    />
                    <TimeDisplay
                        time={time}
                        status={getStatus()}
                        progress={getProgress()}
                    />
                    <Controls
                        start={startTimer}
                        reset={resetTimer}
                        pause={pauseTimer}
                        status={getStatus()}
                    />
                    <Shortcuts />
            </SC.Pomodoro>
        </SC.PomodoroContent>
    )
}
    
