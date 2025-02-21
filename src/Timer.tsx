import { useEffect, useState } from "react";

const Timer=()=>{
    const [count,setCounter]=useState(0);
useEffect(()=>{
   let interval= setInterval(test,1000);
   console.log(interval);
   //return ()=>clearInterval(interval)

   

    //for every render
})//list of variables
  //  

    function test(){
        setCounter(count+1);
console.log(count);
        //data++;
        //console.log(data);


    }

    return (
        <>
       <div> {count}</div>
        </>
    )
}
export default Timer;
