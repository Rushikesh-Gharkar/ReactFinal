import {react, useRef, useState} from "react";


function UseRef(){

    const [count , setCount] = useState(0)
    const countRef = useRef(null);

    function handleStart(){
      countRef.current = setInterval(()=>{
            setCount(count=> count+1)
        } , 1000)
    }
    function handleStop(){
         clearInterval(countRef.current)
            countRef.current = null
    }

   return <div>
    <h2>{count}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
   </div> 
}

export default UseRef;