import * as React from "react";
import { SC } from "../";

type ControlProps = {
    start: Function;
    reset: Function;
    pause: Function;
    status: string;
}

export const Controls = ({ start, reset, pause, status }: ControlProps) => {
    //Added this array of strings to fix >
    //This condition will always return 'false' since the types have no overlap
    //on line 34
    const statusText = ["Running", "Pause", "Resume", "Finished"];
    return(
        <SC.Controls>
            {!status && (
                <SC.Button onClick={()=>start}>
                    Start Timer
                </SC.Button>
            )}
            {status === statusText[3] && (
                <SC.Button onClick={()=>start}>
                    Restart Timer
                </SC.Button>
            )}
            {(status === statusText[1] || status === statusText[0]) && (
                <div>
                    <SC.Button onClick={()=>reset}>
                        Reset
                    </SC.Button>
                    <SC.Button onClick={()=>pause}>
                        {status === statusText[1] ? statusText[2] : statusText[1]}
                    </SC.Button>
                </div>
            )}
        </SC.Controls>
    )
}