import { useState } from 'react';
import './App.css'
import colors from "./data/data";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

function App() {

  return (
    <div>
        <ColorBoxesContainer colors={colors}/>
    </div>
  )
}

export default App
