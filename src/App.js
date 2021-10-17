import { useEffect, useState } from "react";
import './App.css';
import Flat from "./components/Flat";
import Search from "./components/Search";

const FLATS =[1];

function App() {
const [flats, setFlats] = useState([]);

useEffect(() => {
  fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
  .then((res) => res.json())
  .then((data) => setFlats(data));
}, []);


  return (
    <div className="App">
        <main>
          <div className="contents">
            <div><Search/></div>
            <div className="flat-wrapper">
              {FLATS.map(flat => {
                return <Flat key={flat.id} flat={flat}/>
              })}
            </div>
          </div>
          <div className="map">map</div>
        </main>
    </div>
  );
}

export default App;
