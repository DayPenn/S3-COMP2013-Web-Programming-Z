export default function ColorBox({ colors }) {
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
}