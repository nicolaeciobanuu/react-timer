import * as React from "react";
import { SC } from "../";

interface ControlProps  {
    start: Function;
    reset: Function;
    pause: Function;
    status: any;
}

export const Controls = ({ start, reset, pause, status }: ControlProps) => {
    //Added this array of strings to fix >
    //"This condition will always return 'false' since the types have no overlap" on line 34
    const statusText= ["Running", "Paused", "Resume", "Finished"];
    return(
        <SC.Controls>
            {!status && (
                <SC.ControlsButton onClick={()=>start()} className="start">
                    Start Timer
                </SC.ControlsButton>
            )}
            {status === statusText[3] && (
                <SC.ControlsButton onClick={()=>start()} className="start">
                    Restart Timer
                </SC.ControlsButton>
            )}
            {(status === statusText[1] || status === statusText[0]) && (
                <div>
                    <SC.ControlsButton onClick={()=>reset()} className="reset">
                        Reset
                    </SC.ControlsButton>
                    <SC.ControlsButton
                        onClick={() => pause()}
                        className={status=== statusText[1]? "resume" : "pause"}
                    >
                        {status === statusText[1] ? statusText[2] : statusText[1]}
                    </SC.ControlsButton>
                </div>
            )}
        </SC.Controls>
    )
}