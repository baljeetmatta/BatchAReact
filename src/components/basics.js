// // // //Function as First-Class Citizen
// // // //Entity, assign, return , argument pass


// // // function sayHello()
// // // {
// // //     console.log("Hello");
// // // }
// // // //sayHello();
// // // //const fn=sayHello;
// // // //fn();
// // // function greet(fn)
// // // {
// // //     fn();


// // // }
// // // greet(sayHello);

// // // function fun()
// // // {
// // //         return function(){
// // //             return "Hello";
// // //         }
// // // }
// // // console.log(fun()());

// // // //let fref=fun();
// // // //console.log(fref());


// // // //console.log(fun());
// // // function trim(input)
// // // {
// // //     return input.trim();
// // // }
// // // const trim=(str)=>{
// // //     return str.trim();

// // // }
// // import compose from "lodash/fp/compose.js"
//  import pipe from "lodash/fp/pipe.js"
//  const trim=str=>str.trim();
//  const toLower=str=>str.toLowerCase();


// let str="  Javascript  ";
// // //let output="<div>"+toLower(trim(str))+"</div>";
// // //let output=`<div>${str}</div>`;
//  //const wrap=(element,str)=>`<${element}>${str}</${element}>`;
// // function wrap(element)
// // {
// //     return function(str)
// //     {
// //         return `<${element}>${str}</${element}>`;
// //     }
// // }
// const wrap=element=>str=>`<${element}>${str}</${element}>`;


// // //let result=wrap(toLower(trim(str)));
// // //const f=compose(wrap,toLower,trim);
//  const f=pipe(trim,toLower,wrap("div"));

//  const result=f(str);

// //console.log(wrap("div","Javascript"));
// //console.log(wrap("span","Javascript"));


//  console.log(result);
// //currying-
// // function add(a,b)
// // {
// //     return a+b;
// // }
// // console.log(add(5,4))
// // function add(a)
// // {
// //         return function (b)
// //         {
// //             return a+b;
// //         }
// // }
// // // const second=add(5);
// // // console.log(second(10));
// // console.log(add(5)(10));

//pure functions
// function getNumber(number,power)
// {
//     //return number*Math.random();
//     return number*power;
// }
// console.log(getNumber(4,2));
// const minAge=18
// function isEligible(age,minAge)
// {
//     return age>minAge;
// }
// console.log(isEligible(20,18));
///String immutable
// let str="Data";
// const str1=str.toLowerCase();
// console.log(str1, str);

//const person ={"name":"Testname",age:10};
// const data=person; //shallow Copy
// data.name="Change";
// console.log(data,person)
//const data={...person,"name":"Change"}//deep copy
//data.name="Change";
//console.log(data,person);
//console.log(data);

// import {Map} from "immutable"
// const person=Map({
//     name:"Code",
//     years:10,
//     address:{
//         city:"ABC"
//     }
// });
//API for MAP - set of functions
//console.log(person.get("name"));
//console.log(person.toJS())
//person=person.set("name","Test");
//console.log(person.toJS());

//const data={...person};
// data.address.city="New";
// data.name="Change";
// console.log(data,person);

// const data={
//     ...person,
//     address:{
//         ...person.address
//     }
// }
// data.address.city="A";
// console.log(data,person);
//const data=
import { Map } from "immutable";
//let book=Map({"title":"First Book"});
let book={"title":"First Book"};
import { produce } from "immer";
function publish(b)
{
    //b.isPublished=true;
  // const obj= b.set("isPublished",true);
   //return obj;
  const obj= produce(b,draftbook=>{
        draftbook.isPublished=true;
        draftbook.done=false;
   })
return obj;
}
const newbook=publish(book);
console.log(newbook,book)