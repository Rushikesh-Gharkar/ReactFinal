import { useState } from "react"

function Rollup(){
    
    return <div>
        <LightBulb/>
    </div>
}

function LightBulb(){
    const [bulbOn , setbulbOn] = useState(true)
    return <div>
        <BulbState bulbOn={bulbOn}/>
        <ToggleBulbState bulbOn={bulbOn} setbulbOn={setbulbOn}/>
    </div>
}

function BulbState({bulbOn}){
    return <div>
        {bulbOn ? "Bulb on" : "Bulb off"}
    </div>
}

function ToggleBulbState({bulbOn , setbulbOn}){

    function handletoggle(){
        setbulbOn(!bulbOn)
    }

    return <div>
        <button onClick={handletoggle}>Toggle Bulb</button>
    </div>
}

export default Rollup