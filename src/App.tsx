
// // //import './App.css'
// // // import test from './data.json';

import Posts from "./components/Posts";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Jobs, { fetchData } from "./components/Jobs";
// import JobDetails, { fetchJobDetails } from "./components/JobDetails";

// // import { Route, Routes } from "react-router-dom";
// // import Timer from "./Timer";
// // import About from "./components/About";
// // import Contact from "./components/Contact";
// // import { Link } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import MasterLayout from "./MasteLayout";

// // // function Test(){
// // //   return (
// // //     <p>Test Component</p>
// // //   )
// // // }
// // // function App() {
// // //   let data="CodeQuotient";
// // // let arrData:string[]=["First","Second","Third"];
// // // let obj:{name:string,age:number}={
// // //   name:"Test name",
// // //   age:40
// // // }
// // // type objectType={
// // //   name:string,
// // //   age:number
// // // };
// // // let object:objectType={
// // //   name:"First Name",
// // //   age:30
// // // }
// // // let arrObj:objectType[]=test;
 
// // //   return (
// // //     <>
// // //       <div className="bg-red-500 text-white">
// // //         Welcome to Code {data}
// // //         </div>
// // //         <p><ul>{
// // //             arrData.map((item)=>{
// // //               return <li>{item}</li>
// // //             })

// // //           } </ul>
          
// // //           {object.name}
          
// // //           {
// // //             test.map ((item)=>{
// // //               return <p>{item.name}-{item.age}</p>
// // //             })
// // //           }
// // //           </p>
// // //     </>
    
// // //   )
// // // }

// // // export default App
// // // export {Test};
// // const jsonHandler=()=>{
// //   return "Hi";

// // }
// // const App=()=>{
// //   return (
// //     <>
// //     {/* <a href="/about">About us </a> */}
// //     {/* <Link to="/about">About us</Link> */}
// //     <Navbar/>
// //     <Routes>
// //       <Route path="/" element={<MasterLayout/>} >
// //           <Route path="about" element={<About/>} loader={jsonHandler} />
// //           <Route path="contact/:id" element={<Contact/>} />
// //      </Route>
// //     </Routes>
// //     </>
// //   )
// // }
// // export default App;

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>

//   },
//   {
//     path:"/about",
//     element:<About/>

//   },
//   {
//     path:"/jobs",
//     element:<Jobs/>,
//     loader:fetchData

//   },
//   {
//     path:"/jobdetails/",
//     element:<JobDetails/>,
//     loader:fetchJobDetails
    
    

//   },
  
  
// ])
// function App(){


//   return (
//     <>
//     <div>App Component</div>
//     <RouterProvider router={router}/>

    
//     </>
//   )
// }
// export default App;

function App(){

  return (
    <>
    <Posts/>
    </>
  )
}
export default App;