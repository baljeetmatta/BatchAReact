import { useContext } from "react";
import { User } from "./UserDashboard"
import { UserContext } from "./context";
type SideProps={
    user:User;
}
const Sidebar=()=>{
    const user=useContext(UserContext)
    return (<>
    Side Bar {user?.name}</>)

}
export default Sidebar;