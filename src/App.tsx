
// // //import './App.css'
// // // import test from './data.json';

import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoginPage from "./LoginPage";
import { useState } from "react";
import { LoginContext } from "./components/LoginContext";
import About from "./components/About";
import Contact from "./components/Contact";
import { NavLink } from "react-router-dom";
import PrivateLogin from "./components/PrivateLogin";

//import Posts from "./components/Posts";

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

// function App(){

//   return (
//     <>
//     <Posts/>
//     </>
//   )
// }
// export default App;

function App()
{
  const [name,setName]=useState<string|undefined>();

  return (
      <>
      <ul className="flex gap-4">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>

      </ul>
      
     <div> UserName: {name}</div>
      <LoginContext.Provider value={{name,setName}}>
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/" element={<PrivateLogin><Outlet/></PrivateLogin>}>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>

          </Route>
        </Routes>
        </LoginContext.Provider>
      </>
  )
}
export default App;
