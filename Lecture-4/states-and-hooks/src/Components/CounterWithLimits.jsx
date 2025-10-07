import { useState } from "react";

export default function CounterWithLimits() {
  const upperLimit = 10;
  const lowerLimit = -10;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() =>
          // USING a TURNARY:
          // counter < upperLimit
          //    ? setCounter(counter +1)
          //    : setCounter(upperLimit)}>Add</button>

          // using short circuting - if first part is true and second part is true, this will happen, otherwise nothing
          counter < upperLimit && setCounter(counter + 1)
        }
      >
        Add
      </button>
      <button onClick={() => counter > lowerLimit && setCounter(counter - 1)}>
        Subtract
      </button>
    </div>
  );
}
