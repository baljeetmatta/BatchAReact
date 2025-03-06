import { Outlet } from "react-router-dom"

const MasterLayout=()=>{

    return(
        <>
        <div>
Master Layout
        </div>
        <div>
            Child :<Outlet/>

        </div>
        </>
    )
}
export default MasterLayout