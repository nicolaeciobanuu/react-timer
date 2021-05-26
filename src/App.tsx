import { SC } from "./styled";
import {Pomodoro} from "./components";

function App() {
  return (
    <div className="App">
      <SC.Container>
        <Pomodoro/>
      </SC.Container>  
    </div>
  );
}

export default App;
