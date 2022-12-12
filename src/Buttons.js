import React from "react";


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


        


      </div>


    </>
  );
};

export default Buttons;