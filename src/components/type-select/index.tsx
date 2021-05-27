import * as React from "react";
import { SC } from "../";

interface TypeSelectProps  {
    types: {
        name: string;
        time: number;
    }[];
    changeType: Function;
    selected: {
        name: string;
        time: number;
    }
}

export const TypeSelect = React.memo(({types, changeType, selected,}: TypeSelectProps) =>
    <SC.TypeSelect>
        {types.map((type) => 
            <SC.Button
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name? "active" : "" }
            >
                {type.name}
            </SC.Button>
        )}
    </SC.TypeSelect>
)