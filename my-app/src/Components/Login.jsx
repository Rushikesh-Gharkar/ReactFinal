import { useRef } from "react";

function Login(){

    const inputRef = useRef(null);

    function handleUname(){
        inputRef.current.focus();
    }
    return <div>
        <input type = "text" placeholder="Usernmae" ref = {inputRef}/>
        <input type = "password" placeholder="Password" />
        <button onClick={handleUname}>Submit</button>
    </div>
}

export default Login;