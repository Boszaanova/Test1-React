import React from "react";
import Data from "./MOCK_DATA.json";

const Buttons2 = ({ filterItem, setItem, menuItems2 }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems2.map((Val, id) => {
          return (
            <button
              className="btn-secondary btn-lg px-2 mx-2 btn"
              onClick={() => filterItem(Val)}
              key={id}>{Val}
            </button>

          );
        })}

      </div>
      <div className="row mt-3">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <input type="search" className="form-control my-4" placeholder="Search..." aria-label="Search" />
          <button
            className="btn-success text-white fw-bold btn"
            onClick={() => setItem(Data)}
          >
            All/Clear
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>


    </>
  );
};

export default Buttons2;