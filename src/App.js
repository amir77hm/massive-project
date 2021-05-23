import Palette from "./Palette";
import seenColors from "./seenColors";
import ColorHelper from "./ColorHelper";
import './App.scss'

function App() {

  // console.log(ColorHelper(seenColors[0]))

  return (
    <div className="App">
      <Palette palette={ColorHelper(seenColors[1])} />
    </div>
  );
}

export default App;
