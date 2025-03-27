import { useEffect, useState } from "react"
import { BugType } from "./BugApp"
import { BUG_RESOLVED, bugStore } from "./BugStore"
type BugProps={
    bugs:BugType[],
    setBugs:(args:BugType[])=>void
}
//const BugList=(props:BugProps)=>{
    const BugList=()=>{
        const [bugs,setBugs]=useState<BugType[]>();


        useEffect(()=>{
            
            setBugs( bugStore.getState().bugs);
            
         const unsubscribe=  bugStore.subscribe(()=>{

            setBugs( bugStore.getState().bugs);
           })
           


        },[])


    const resolveHandler=(id:number)=>{

            bugStore.dispatch({
                type:BUG_RESOLVED,
                payload:{
                    id:id
                }
            })
            setBugs(bugStore.getState().bugs)
        // const updatedBugs=props.bugs.map((item)=>{
        //     if(item.id==id)
        //         item.resolved=true;
    
        //     return item;
        // })
        // props.setBugs(updatedBugs);
    
    
    }
    
    return (
        <div className="container grid grid-cols-4 gap-3">
        {
        bugs?.map((item)=>{
                return (
                    <div className="flex gap-3 bg-gray-300 p-4">
                        <div>{item.description}</div>
                        <div>{item.resolved?'Resolved':<button onClick={()=>{resolveHandler(item.id)}} className="bg-red-400 text-white p-2 rounded-md m-2">Resolve</button>}</div>
                    </div>
                )

            })
        }
        </div>
    )
}
export default BugList;