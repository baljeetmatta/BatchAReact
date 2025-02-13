import { useState } from "react";
import Child from "./Child"

const Parent=()=>{
    //let data="Hi";
    const [data,setData]=useState("Hi");

    return (
        <>
        <div>Parent {data}</div>
        <Child data={data} fun={setData}/>
        </>
    )
}
export default Parent;