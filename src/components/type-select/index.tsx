import * as React from "react";
import { SC } from "../";

type TypeSelectProps = {
    types: {
        name: string;
    }[];
    changeType: Function;
    selected: {
        name: string;
    };
}

export const TypeSelect = ({types, changeType, selected}: TypeSelectProps) =>
    <SC.TypeSelect>
        {types.map((type, index) => {
            <SC.Button
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name? "active" : "" }
            >
                {type.name}
            </SC.Button>
        })

        }
    </SC.TypeSelect>