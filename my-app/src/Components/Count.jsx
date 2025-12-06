import { createContext, useContext, useState } from "react"

const CountContext = createContext();

export function CountContextProvider({children}){
    const [count , setCount] = useState(0);
    return <CountContext.Provider value={{count , setCount}}>
        {children}
    </CountContext.Provider>
}

function Count(){
    return (
        <CountContextProvider>
            <IncreaseCount/>
            <DecreaseCount/>
            <Value/>
        </CountContextProvider>
    )
}

function IncreaseCount(){
    const {count , setCount} = useContext(CountContext)
    return <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
}

function DecreaseCount(){
    const {count , setCount} = useContext(CountContext)
    return <button onClick={()=> {setCount(count=>count-1)}}>Decrease</button>
}

function Value(){
    const {count} = useContext(CountContext)
    return <div>
        {count}
    </div>
}



export default Count;