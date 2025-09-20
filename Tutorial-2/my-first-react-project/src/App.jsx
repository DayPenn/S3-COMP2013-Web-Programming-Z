import './App.css'
import Card from './Components/Card';
// import HelloWorld  from './Components/HelloWorld';

function App() {
  return (
  <div className = "main-div">
    <h1>Diamond World</h1>  
      <div className = "main-container">
        <Card image="src\assets\images\ring1.jpg" name = "Princess" price="$1,350"/>
        <Card image="src\assets\images\ring2.jpg" name = "Swan" price="$900" sale = {true}/>
        <Card image="src\assets\images\ring3.jpg" name = "Collection" price="$1,100" sale =  {true}/>
      </div>
</div>
  );
}

export default App


/* 
THIS IS WHAT USED TO BE IN THE RETURN section:
<>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> 
    
    */