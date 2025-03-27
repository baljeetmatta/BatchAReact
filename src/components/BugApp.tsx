import { useRef, useState } from "react";
import BugList from "./BugList";
//1. State->
//2. Parent Child
/*

    id,description,resolved

*/
import { bugStore,BUG_ADDED,BUG_RESOLVED } from "./BugStore";
export type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
let lastid=1;
const BugApp=()=>{
    //1 Two Binding , variable->onchange value=variable
    //2 UseRef
    //const [bugs,setBugs]=useState<BugType[]>([])
    const inputRef=useRef<HTMLInputElement|null>(null);
    const addHandler=()=>{
        //const updatedBugs=bugStore.getState();
        bugStore.dispatch({
            type:BUG_ADDED,
            payload:{
                description:inputRef.current?.value
            }
        })
       // setBugs(bugStore.getState())
        // const updatedBugs=[...bugs];
        // updatedBugs.push({
        //     id:lastid++,
        //     description:inputRef.current?.value,
        //     resolved:false
        // })
        // setBugs(updatedBugs);


    }
// const resolveHandler=(id:number)=>{

//     const updatedBugs=bugs.map((item)=>{
//         if(item.id==id)
//             item.resolved=true;

//         return item;
//     })
//     setBugs(updatedBugs);


// }
    return (

        <>
        <input ref={inputRef} className="border" type="text"/>
        <button onClick={addHandler} className="bg-red-400 text-white p-2 rounded-md m-2">Add</button>
       {/* <BugList bugs={bugs} setBugs={setBugs}/> */}
       <BugList/>

        </>
    )


}
export default BugApp;