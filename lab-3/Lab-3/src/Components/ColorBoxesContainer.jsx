import ColorBox from "./ColorBox";

// no need to "import" colors array b/c passed in at App.jsx

export default function ColorBoxesContainer({colors}) {
    return (
        <div className="ColorBoxesContainer">
        {colors.map((color, index) => (
            <ColorBox key={index} color={color} colors={colors} />
        ))}
        </div>
    );
}