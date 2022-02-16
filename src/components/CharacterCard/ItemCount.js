import React, { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({onAdd}) => {
    
  const stock = 5;

  const [counter, setCounter] = useState(1);

  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handlerCounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };


  function handlerCart(){
      onAdd()
      alert(`Se agrego correctamente ${counter} producto(s)`)
  }

  return (
    <div className="counterStyle">
      <p>CANTIDAD: {counter}</p>
      <div>
       
        <Button
          className="buttonStyle"
          color="success"
          onClick={handlerCounterDown}
        >
          -
        </Button>
        <Button
          className="buttonStyle"
          color="success"
          onClick={handlerCounterUp}
        >
          +
        </Button>
      </div>
      <Button variant="outlined" onClick={handlerCart}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;
