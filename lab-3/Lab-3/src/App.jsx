import './App.css'
import colors from "./data/data";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

function App() {

  return (
    <div>
        <ColorBoxesContainer colors={colors}/>
        <div>
          <p>
            <a href="http://localhost:5173/">
            <button>Reset</button>
            </a>
          </p>
        </div>
    </div> 
  )
}

export default App
