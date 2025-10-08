import './App.css'
import BadCounter from"./Components/BadCounter";
import ColorBox from './Components/ColorBox';
import Counter from "./Components/Counter";
import CounterWithLimits from './Components/CounterWithLimits';
import EmojiStore from './Components/EmojiStore';
import Toggle from "./Components/toggle";
import data from "./data/data";

function App() {

  return (
    <>
            {/*< BadCounter />
            < Counter />
            < CounterWithLimits />
            < Toggle />
            <EmojiStore/>*/}
    <ColorBox colors={data}/>
    </>
  )
}

export default App
