import {useState} from "react"; // if using STATES always name setters SET + NAME *continuity, proper-etiquette*

function getRandomColor(colors) {
    const index = Math.floor(Math.random() * colors.length); // from POKEMON randomizer
    return colors[index];
}

export default function ColorBox({color, colors}) { // container
    const [boxColor, setBoxColor] = useState(color);

    return (
        <div
            className="ColorBox"
            style={{ backgroundColor: `${boxColor}`}}
            onClick={ () => setBoxColor(getRandomColor(colors))}
        ></div>
    );
}