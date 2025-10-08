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

//    <div className="ColorBox">
//        <p>Box#1</p>
//      </div>
//      <div className="ColorBox" style={{backgroundColor: "red"}}>
//        <p>Box#2</p>
//      </div>
//          <div className="ColorBox" style={{backgroundColor: "aqua"}}>
//        <p>Box#3</p>
//    </div>