import Profile from "./Profile";
import Sidebar from "./Sidebar";
import {User} from "./UserDashboard";

type DashboardProps={
    user:User
}
const Dashboard=()=>{
    return (
        <>
        <Sidebar/>
        <Profile/>

        </>
    )
}
export default Dashboard;
