import { useState } from "react";
export default function Counter(){
    // define the variable and setter function then we assign useState to them
    // and add the initial value for the variable as an argument for the useState function
    
    const [counter /*variable*/, setCounter /*function*/] = useState(0);
    
    let initialState = 0;

    return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Add to Counter</button>  
        <button onClick={() => setCounter(counter -1)}>Remove from Counter</button>    
        <button onClick={() => setCounter(initialState)}>RESET</button>

    </div>
    );
}

// states does not update until it re-renders,
//  have to use +1 instead of ++ otherwise need
// to click on add to counter twice to add to count
