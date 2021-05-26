import * as React from "react";
import { SC } from "../";
import { FaKeyboard } from "react-icons/fa"

const shortcutsList: { name: string, key: string }[] = [
    {"name": "Play / Pause / Resume", "key": "Space"},
    {"name": "Reset", "key": "Esc"},
    {"name": "Pomodoro", "key": "1"},
    {"name": "Short Break", "key": "2"},
    {"name": "Long Break", "key": "3"}
]
export const Shortcuts = () =>
    <SC.Shortcuts>
        <SC.Icon>
            <FaKeyboard />
        </SC.Icon>
        <SC.ShortcutsBox>
            {shortcutsList.map((shortcut, index) =>
                <SC.Shortcut key={index}>
                    <div>{shortcut.name}</div>
                    <div>
                        <kbd>{shortcut.key}</kbd>
                    </div>
                </SC.Shortcut>
            )}
        </SC.ShortcutsBox>
    </SC.Shortcuts>
        