//1. Desgin the store

import { createStore, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";

//Structure , id,description,resolved
export interface  BugType{
    id:number,
    description:string|undefined,
    resolved:boolean
}
//2. actions
// BUG_ADDED, BUGResolved
export const BUG_ADDED="bugAdded";
export const BUG_RESOLVED="bugResolved";
//3. Reducer
/* {
    bugs:[],

}
    [{}]
type,
payload

    */
   type ActionType={
        type:string,
        payload:{
            description?:string,
            id?:number
        }

   }

   interface StateType{
    bugs:BugType[]
   }
   let lastid=1;
///const BugReducer=(state:BugType[]=[],action:ActionType)=>{
    const BugReducer=(state:StateType={bugs:[]},action:ActionType)=>{

    if(action.type==BUG_ADDED)
    {
            const updatedState=[...state.bugs];
            updatedState.push({
                id:lastid++,
                description:action.payload.description,
                resolved:false
            })
            return {...state,bugs:updatedState}

    }
   else if(action.type==BUG_RESOLVED)
        {
                const bugs=state.bugs.map((item)=>{
                    if(item.id==action.payload.id)
                        item.resolved=true;
                    return item;
                })
               
                return {...state,bugs:bugs};
    
        }
      else
        return state;

}
//4. Setup a store
import storage from "redux-persist/lib/storage"//localstorage
const config={
    key:'bugroot',
    storage
}
const pReducer=persistReducer(config,BugReducer);

//export const bugStore=createStore(pReducer);
//export const pstore=persistStore(bugStore);
export const bugStore=createStore(pReducer);
export const pstore=persistStore(bugStore);

