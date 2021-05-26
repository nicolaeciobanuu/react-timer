import * as React from "react";
import {SC}from "../";
import { formatTime } from "../../utils";

type TimeDisplayProps = {
    time: number;
    status: string;
    progress: number;
}

export const TimeDisplay = ({ time, status, progress }: TimeDisplayProps) => {
    
    document.title = `(${formatTime(time)}) Pomodoro`;
    const radius = 150;
    const stroke = 5;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <SC.TimeDisplay>
            <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
                <circle
                    stroke="#ddd"
                    fill="#fff"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#D9534F"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div>
                <SC.Time>{formatTime(time)}</SC.Time>
                <SC.Status>{status}</SC.Status>
            </div>
        </SC.TimeDisplay>
    )
}