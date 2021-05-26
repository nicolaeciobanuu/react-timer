import * as React from "react";
import { SC } from "../";
import { BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";

type ToggleSoundProps = {
    sound: JSON;
    toggleSound: Function;
}
export const ToggleSound = ({sound, toggleSound}: ToggleSoundProps) =>
    <SC.ToggleSound>
        <SC.ButtonSound
            onClick={()=>toggleSound}
            className="active"
            title={sound?"Disable Sound": "Enable Sound"}
        >
            <SC.VolumeIcon>{sound? <BsFillVolumeUpFill/> : <BsFillVolumeDownFill/> }</SC.VolumeIcon>
        </SC.ButtonSound>
    </SC.ToggleSound>