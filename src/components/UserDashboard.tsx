import { useState } from "react";
import Dashboard from "./Dashboard";
import { UserContext } from "./context";
export interface User{
    name:string,
    isSubscribed:boolean
}
const UserDashboard=()=>{
    const [user,setUser]=useState<User>({
        name:"State Name",
        isSubscribed:true
    });
    return (
        <>
        <UserContext.Provider value={user}>
        {/* <Dashboard user={user}/> */}
        <Dashboard/>
        
        </UserContext.Provider>
        </>
    )

}
export default UserDashboard;