import { useLoaderData, useLocation } from "react-router-dom";

const About=()=>{
    const location= useLocation();
    const data=useLoaderData();

    return (
        <>
        ID={location.state?.data}
        Data:{data}
        <div>About us Page

        </div>
        </>
    )
}
export default About;