import './App.css'
import Card from './Components/Card';
// Dayna Pennock, Lab2 due Sept 22, 2025
// http://localhost:5174/


function App() {
  return (
  <div className = "main-div">
    <h1 className = "webpage-title">Resorts Lite</h1>  
      <div className = "main-container">
        <Card image="src\assets\images\1.jpg" location = "Indonesia" resort = "Gili Air Hotel" price="$589/night" goodRating = {true} rating = "4.8 ★"/>
        <Card image="src\assets\images\2.jpg" location = "Seychelles" resort = "Hilton Resort" price="$629/night" goodRating = {true} rating = "4.2 ★"/>
        <Card image="src\assets\images\3.jpg" location = "US Virgin Islands" resort = "Goa Resort" price="$485/night" goodRating =  {false} rating = "3.5 ★"/>
        <Card image="src\assets\images\4.jpg" location = "Bahamas" resort = "Kuredu Resort" price="$729/night" goodRating = {true} rating = "4.1 ★"/>
        <Card image="src\assets\images\5.jpg" location = "Mauritius" resort = "Trou D'eau Douce" price="$877/night" goodRating = {true} rating = "4.9 ★"/>
        <Card image="src\assets\images\6.jpg" location = "Bermuda" resort = "Staniel Cay Hotel" price="$365/night" goodRating = {false} rating = "3.2 ★"/>
      </div>
</div>
  );
}


export default App