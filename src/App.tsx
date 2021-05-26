import * as React from "react";
import { SC } from "./styled";
import {Pomodoro} from "./components";

export const App = () => 
    <div className="App">
      <SC.Content>
        <Pomodoro/>
      </SC.Content>  
    </div>
