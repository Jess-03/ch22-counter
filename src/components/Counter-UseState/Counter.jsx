import { useState } from "react";
import { ButtonApp, ButtonReset } from "./";

export const Counter = ({initialValue = 0}) => {
    console.log("Counter App");

    const[number, setNumber] = useState(0) 

    const increaseCounter = () =>{
        setNumber(number + 1);
        //if (number>=10) increaseValue
        //console.log("+1", number);
    }

    const decreaseCounter = () =>{
        setNumber(number - 1);
    }

    const resetCounter = () =>{
        setNumber( initialValue );
    }

  return (
    <>
    <h2>Counter</h2>
    <h2>{number}</h2>

    <ButtonApp onClick={increaseCounter}>+</ButtonApp>
    <ButtonApp onClick={decreaseCounter}>-</ButtonApp>
    <ButtonApp onClick={resetCounter}>Reset</ButtonApp>
        
    <ButtonReset onClick={setNumber} initialValue={50} >Reset at 50</ButtonReset>

    {/* <button onClick={increaseCounter}>+</button> */}
    {/* Boton incremento*/}
    {/* <button onClick={decreaseCounter}>-</button> */}
    {/* Boton reset*/}
   {/*  <button onClick={resetCounter}>Reset</button> */}
    </>
  )
}
