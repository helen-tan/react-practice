import { useEffect, useState } from "react";
import './App.css';
import Flat from "./components/Flat";
import Search from "./components/Search";
import Map from "./components/Map";


function App() {
  const [allFlats, setAllFlats] = useState([]);
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then((res) => res.json())
      .then((flats) => {
        setFlats(flats);
        setAllFlats(flats);
      });
  }, []);


  return (
    <div className="App">
      <main>
        <div className="contents">
          <div><Search setFlats={setFlats} allFlats={allFlats}/></div>

          <div className="flats-wrapper">
            {flats.length
              ? flats.map((flat) => <Flat flat={flat} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />)
              : "No results found"}
          </div>
        </div>
      </main>

      <div className="map">
        <Map flats={flats} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />
      </div>
    </div>
  );
}

export default App;
