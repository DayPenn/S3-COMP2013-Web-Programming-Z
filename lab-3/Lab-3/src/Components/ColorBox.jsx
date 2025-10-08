import {useState} from "react"; 
// Ziad NOTE: if using STATES always name setters SET + NAME *continuity-etiquette*

function getRandomColor(colors) {
    const index = Math.ceil(Math.random() * colors.length); // from POKEMON randomizer
    return colors[index];
}

export default function ColorBox({color, colors}) { // container for all boxes
    const [boxColor, setBoxColor] = useState(color);

    return (
        <div
            className="ColorBox"
            style={{ backgroundColor: `${boxColor}`}}
            onClick={ () => setBoxColor(getRandomColor(colors))}
        ></div>
    );
}