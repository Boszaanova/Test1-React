import React from "react";
import Data from "./MOCK_DATA.json";

const Buttons = ({ filterItem, setItem, menuItems1 }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems1.map((Val, id) => {
          return (
            <button
              className="btn-secondary btn-lg px-2 mx-2 btn "
              onClick={() => filterItem(Val)} 
              key={id}>{Val}
            </button>
          );
        })}

        
        <button
          className="btn-success text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All/Clear
        </button>

        
      </div>

      
    </>
  );
};

export default Buttons;