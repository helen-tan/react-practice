import './App.css';
import Flat from "./components/Flat";

import Hello from "./components/Hello";

const FLATS =[1];

function App() {
  return (
    <div className="App">
        <main>
          <div className="contents">
            <div>search</div>
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
