import { useContext, useRef } from "react";
import { LoginContext } from "./components/LoginContext";
import { LoginType } from "./components/LoginContext";
const LoginPage=()=>{
    const inputRef=useRef<HTMLInputElement>(null)
    const context=useContext<LoginType|undefined>(LoginContext);

const loginHandler=()=>{
    //alert(inputRef.current?.value)
    context?.setName(inputRef.current?.value)

}
const logoutHandler=()=>{
    context?.setName(undefined);
    
}

if(context?.name)
{
return  <button onClick={logoutHandler}>Logout</button>;
}
    return (
        <>

        <input type="text"  ref={inputRef}/>
        <button onClick={loginHandler}>Login</button>
       
        </>
    )
}
export default LoginPage;