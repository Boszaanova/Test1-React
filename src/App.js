import React, { useState } from "react";
import Data from "./MOCK_DATA.json";
import Card from "./Card";
import Buttons from "./Buttons";
import Buttons2 from "./Buttons2";


const App = () => {
  const [item, setItem] = useState(Data);

  // Set category to Arrays and set to button fillter name
  const menuItems1 = [...new Set(Data.map((Val) => Val.gender))];
  const menuItems2 = [...new Set(Data.map((Val) => Val.country))];


  // Fillter gender
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.gender === curcat;
    });
    setItem(newItem);
  };
  // Fillter country
  const filterItem2 = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.country === curcat;
    });
    setItem(newItem);
  };


  return (
    <>
      <div className="container">
        <div className="row">

          <h1 className="col-12 text-center my-4 fw-bold ">TEST</h1>

          <div className="my-1  p-3">
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems1={menuItems1}
            />
          </div>

          <div className="my-1  p-3">
            <Buttons2
              filterItem={filterItem2}
              setItem={setItem}
              menuItems2={menuItems2}
            />
          </div>




          <Card item={item} />

        </div>
      </div>
    </>
  );
};

export default App;