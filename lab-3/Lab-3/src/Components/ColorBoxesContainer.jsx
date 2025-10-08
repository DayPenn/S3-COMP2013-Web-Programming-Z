import ColorBox from "./ColorBox";

// no need to "import" colors array b/c passed in at App.jsx

export default function ColorBoxesContainer({colors}) {
    return (
        <div className="ColorBoxesContainer">
        {colors.map((color, index) => (
            <ColorBox key={index} color={color} colors={colors}/>
        ))}
        </div>
    );
}

 
//NOT what I intended but when this is the version of code, it sets ALL 
//boxes to the same colour as listed in App.css, kind of interesting, keeping:
//
//import ColorBox from "./ColorBox";
//
//export default function ColorBoxesContainer({colors}) {
//    return (
//        <div className="ColorBoxesContainer">
//        {colors.map((color, index) => (
//            <ColorBox key={index}colors={colors} />
//        ))}
//        </div>
//    );
//}