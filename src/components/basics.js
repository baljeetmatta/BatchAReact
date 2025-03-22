// // // // //Function as First-Class Citizen
// // // // //Entity, assign, return , argument pass


// // // // function sayHello()
// // // // {
// // // //     console.log("Hello");
// // // // }
// // // // //sayHello();
// // // // //const fn=sayHello;
// // // // //fn();
// // // // function greet(fn)
// // // // {
// // // //     fn();


// // // // }
// // // // greet(sayHello);

// // // // function fun()
// // // // {
// // // //         return function(){
// // // //             return "Hello";
// // // //         }
// // // // }
// // // // console.log(fun()());

// // // // //let fref=fun();
// // // // //console.log(fref());


// // // // //console.log(fun());
// // // // function trim(input)
// // // // {
// // // //     return input.trim();
// // // // }
// // // // const trim=(str)=>{
// // // //     return str.trim();

// // // // }
// // // import compose from "lodash/fp/compose.js"
// //  import pipe from "lodash/fp/pipe.js"
// //  const trim=str=>str.trim();
// //  const toLower=str=>str.toLowerCase();


// // let str="  Javascript  ";
// // // //let output="<div>"+toLower(trim(str))+"</div>";
// // // //let output=`<div>${str}</div>`;
// //  //const wrap=(element,str)=>`<${element}>${str}</${element}>`;
// // // function wrap(element)
// // // {
// // //     return function(str)
// // //     {
// // //         return `<${element}>${str}</${element}>`;
// // //     }
// // // }
// // const wrap=element=>str=>`<${element}>${str}</${element}>`;


// // // //let result=wrap(toLower(trim(str)));
// // // //const f=compose(wrap,toLower,trim);
// //  const f=pipe(trim,toLower,wrap("div"));

// //  const result=f(str);

// // //console.log(wrap("div","Javascript"));
// // //console.log(wrap("span","Javascript"));


// //  console.log(result);
// // //currying-
// // // function add(a,b)
// // // {
// // //     return a+b;
// // // }
// // // console.log(add(5,4))
// // // function add(a)
// // // {
// // //         return function (b)
// // //         {
// // //             return a+b;
// // //         }
// // // }
// // // // const second=add(5);
// // // // console.log(second(10));
// // // console.log(add(5)(10));

// //pure functions
// // function getNumber(number,power)
// // {
// //     //return number*Math.random();
// //     return number*power;
// // }
// // console.log(getNumber(4,2));
// // const minAge=18
// // function isEligible(age,minAge)
// // {
// //     return age>minAge;
// // }
// // console.log(isEligible(20,18));
// ///String immutable
// // let str="Data";
// // const str1=str.toLowerCase();
// // console.log(str1, str);

// //const person ={"name":"Testname",age:10};
// // const data=person; //shallow Copy
// // data.name="Change";
// // console.log(data,person)
// //const data={...person,"name":"Change"}//deep copy
// //data.name="Change";
// //console.log(data,person);
// //console.log(data);

// // import {Map} from "immutable"
// // const person=Map({
// //     name:"Code",
// //     years:10,
// //     address:{
// //         city:"ABC"
// //     }
// // });
// //API for MAP - set of functions
// //console.log(person.get("name"));
// //console.log(person.toJS())
// //person=person.set("name","Test");
// //console.log(person.toJS());

// //const data={...person};
// // data.address.city="New";
// // data.name="Change";
// // console.log(data,person);

// // const data={
// //     ...person,
// //     address:{
// //         ...person.address
// //     }
// // }
// // data.address.city="A";
// // console.log(data,person);
// //const data=
// import { Map } from "immutable";
// //let book=Map({"title":"First Book"});
// let book={"title":"First Book"};
// import { produce } from "immer";
// function publish(b)
// {
//     //b.isPublished=true;
//   // const obj= b.set("isPublished",true);
//    //return obj;
//   const obj= produce(b,draftbook=>{
//         draftbook.isPublished=true;
//         draftbook.done=false;
//    })
// return obj;
// }
// const newbook=publish(book);
// console.log(newbook,book)
//Redux
/*
ACTIONS ->(Events)-dispatch

STORE

REDUCER ->(Event Handler) -> function (state,action)
state-existing state
action -> along the data

returns updateState->Store


//1. Design a Store (Storage->State)
//Bug Tracking-->Todo
[
    {
      id:number,
      description:string,
      resolved:boolean
    }

]
    // 1 reducer
shopping cart
{
  carts:[
      {}
    ]  
  currentUser:{}
  wallet:{}  

}
  // 3 Slices->3 Reducers
//2. Actions
const ADD_BUG="bugAdded";
ADD_BUG, RESOLVE_BUG, DELETE_BUG
OBJECT
{
    type:ADD_BUG,
    payload:{
    description:"First Bug"
     }
}
     {
    type:"resolveBug",
    payload:{
    id:1
     }
}
3.
reducer-> simple function (state,action)
return updateState

4. Setup Store

*/
const ADD_BUG="bugAdded";
const RESOLVE_BUG="bugResolved";
let lastid=1;
function BugReducer(state=[],action)
{
    if(action.type==ADD_BUG)
    {
      const updatedState=[...state];
      updatedState.push({
          id:lastid++,
          description:action.payload.description,
          resolved:false

      })
      return updatedState;


    }
    if(action.type==RESOLVE_BUG)
      {
       
        return resolveBug(state,action);
        
      }

      return state;

}
function resolveBug(state,action)
{
  const updatedState= state.map((item)=>{
    if(item.id==action.payload.id)
      item.resolved=true;

    return item;
  })
  return updatedState;

}

import { createStore } from "redux";
const store=createStore(BugReducer);
console.log(store.getState());

const addBug=(description)=>
{
store.dispatch({
  type:ADD_BUG,
  payload:{
    description:description
  }
})
}

// store.dispatch({
//   type:ADD_BUG,
//   payload:{
//     description:"Second Bug"
//   }
// })

addBug("First Bug");
addBug("Second Bug");



console.log(store.getState());

store.dispatch({
  type:RESOLVE_BUG,
  payload:{
    id:1
  }
})
console.log(store.getState());