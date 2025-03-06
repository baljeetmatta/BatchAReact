import { LoaderFunctionArgs, useLocation, useParams } from "react-router-dom"
import { jobsType } from "./Jobs"
const JobDetails=()=>{
    const location=useLocation()
    return (
        <>
        <div>
{location.state.data}
        </div>
        </>
    )
}
export default JobDetails;

export const fetchJobDetails=async ({params,location}:LoaderFunctionArgs)=>{
//const {id}=useParams();
//const location=useLocation();

//console.log(params.id);

    const response=await fetch("/jobs.json");
    const final=await response.json();
//console.log(final);
    const data=final.filter((item:jobsType)=>{
        if(item.id==location.data.id)
            return true;
    })
    return data;
//return "Hi";




}
