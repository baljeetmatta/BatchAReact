import { useContext } from "react"
import { LoginContext, LoginType } from "./LoginContext"
import { Navigate } from "react-router-dom"

type PType={
    children:React.ReactNode
}
const PrivateLogin=(props:PType)=>{
    const context=useContext<LoginType|undefined>(LoginContext);

    return (
       <>
       {context?.name?props.children:<Navigate to="/login"/>}
       </>
    )
}
export default PrivateLogin;