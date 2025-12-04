import { createContext, useContext, useState } from "react"

const BulbContext = createContext();

function Rollup(){
    const [bulbOn , setbulbOn] = useState(false)
    
    return <div>
        <BulbContext.Provider
            value={{
                bulbOn:bulbOn,
                setbulbOn:setbulbOn
            }}
        >
        <LightBulb/>
        </BulbContext.Provider>
    </div>
}

function LightBulb(){
    const {bulbOn ,setbulbOn} = useContext(BulbContext)
    
    return <div>
        <BulbState bulbOn={bulbOn}/>
        <ToggleBulbState bulbOn={bulbOn} setbulbOn={setbulbOn}/>
    </div>
}

function BulbState({bulbOn}){
    // const {bulbOn} = useContext(BulbContext)
    return <div>
        {bulbOn ? "Bulb on" : "Bulb off"}
    </div>
}

function ToggleBulbState({bulbOn , setbulbOn}){
    // const {bulbOn} = useContext(BulbContext)

    function handletoggle(){
        setbulbOn(!bulbOn)
    }

    return <div>
        <button onClick={handletoggle}>Toggle Bulb</button>
    </div>
}

export default Rollup