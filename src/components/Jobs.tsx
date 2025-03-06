import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

//import jsonData from "../jobs.json"
export interface jobsType{
    id:number,
    title:string,
    description:string,
    package:string
}
const Jobs=()=>{
       const data= useLoaderData<jobsType[]>();
    return (
        <>
       
        
        <div>Jobs Data</div>
        <div className="container">
            <div className="grid grid-cols-3 gap-4">
                {
                    data.map((item)=>{
                        return (
                            <div className="bg-gray-200 p-4 "> 
                                    <div>
                                       <NavLink to={`/JobDetails/${item.id}`} state={{data:item.id}}>  {item.title}</NavLink> 
                                    </div>
                                    <div>
                                        {item.description}
                                        </div>

                                </div>
                        )
                    })
                }
            </div>

        </div>

        </>
    )
}
export const fetchData=async ()=>{
    const response=await fetch("/jobs.json");
    const final=response.json();
console.log(final);

    return final;
//return "Hi";




}
export default Jobs;