import { useContext } from "react";
import { User } from "./UserDashboard"
import { UserContext } from "./context";
type ProfileProps={
    user:User;
}
const Profile=()=>{
      const user=useContext(UserContext);
    return (<>
    Profile {user?.name}</>)

}
export default Profile;