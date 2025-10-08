import { useState } from "react";

import colors from "../data/data.js";

export default ColourContainer() {
  const getRandomColour = () => {
    const indexOfColour = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
}

/* NOT WORKING: keep in case I was onto something:

export default function ColorBox({ colourData }) {
  const randomColourPicker = () => {
    const randomIndex = Math.floor(Math.random() * colourData.length) /*choosing from index, not hex#*/
    //return colourData[randomIndex];
  //};
//}


/* FROM TUTORIAL: save for reference:

export default function ColorBox({ colours }) {
  return (
    <div className="ColourBoxesContainer">
        {colors.map((color, index) => (
            <div className="ColorBox" 
            key={index} 
            style={{backgroundColor: color}}
            onClick={() => console.log("colourBox clicked")}
            ></div>
        ))}
    </div>
  );
} */