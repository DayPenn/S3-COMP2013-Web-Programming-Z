const randomId = () => {
    return Math.ceil(Math.random() * 25) /* amt of colour boxes */
}

export default function Colours(){
    return <p>{randomId()}</p>
}
//////////////////////////////////////
// copying the colour array so I don't change the original
//const deepCopyColours = deepCopyColours([...data]);
///////////////////////////////////////
// shuffling around the colours
//const toggleColours = (array) => {
//    for (let i = 0; i < array.length; i++) {
//        const boxColour = Math.ceil(Math.random * 25)
//    }
//}
/////////////////////////////////////