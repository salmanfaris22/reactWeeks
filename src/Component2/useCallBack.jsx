import React, { useCallback, useState } from "react";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);


  
const incremenetcount = useCallback(()=>{
    setCount(count+1)
    console.log("i'm count ");
},[count]) 

const increamentCounter = ()=>{
    setCounter(counter+1)
    console.log("i'm counter");
}

console.log("i'm outer");

  return (
    <div>
      <div>count : {count}</div>
      <div>counter {counter}</div>
      <div>
        <button onClick={incremenetcount}>ingrement count </button>
        
      </div>
      <div>
        <button onClick={increamentCounter}>ingrement counter </button>
       
      </div>
    </div>
  );
};

export default UseCallBack;
