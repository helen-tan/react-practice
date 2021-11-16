//import
import React from 'react';
import "./Flat.css";

//define
const Flat = ({ flat, selectedFlat, setSelectedFlat }) => {
    const isSelected = selectedFlat ? selectedFlat.id === flat.id : false;
  
    return (
      <div className={`flat ${isSelected ? "selected" : ""}`} key={flat.id} onClick={() => setSelectedFlat(flat)}>
        <div className="flat-image">
          <img src={flat.imageUrl} alt="" />
        </div>
        <div className="flat-name">{flat.name}</div>
      </div>
    );
  };
        /*
        <>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg" alt="" />
                </div>
                <div className="flat-name">Charm at the Steps of the Sacre Coeur/Montmartre</div>
            </div>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg" alt="" />
                </div>
                <div className="flat-name">Trendy Apt in Buttes Montmartre</div>
            </div>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg" alt="" />
                </div>
                <div className="flat-name">Super 60m2 in trendy neighborhood!</div>
            </div>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg" alt="" />
                </div>
                <div className="flat-name">Splendide terrasse vue imprenable</div>
            </div>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg" alt="" />
                </div>
                <div className="flat-name">Superbe vue à 2 min du Sacré Coeur</div>
            </div>
            <div className="flat ">
                <div className="flat-image">
                    <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg" alt="" />
                </div>
                <div className="flat-name">Bohemian and Chic in Paris</div>
            </div>
        </>
        */


//export
export default Flat;