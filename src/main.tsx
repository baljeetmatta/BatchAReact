import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Controls from './Controls'
import GreetClass from './GreetClass'
import Login from './Login'
import Banner from './Banner'
import UI from './UI'
import Parent from './Parent'
import State from './State'
import Timer from './Timer'
import CTimer from './CTimer'
import UserDashboard from './components/UserDashboard'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Greet from './Greet.tsx';
// import Button from './Button.tsx';
// // function clickHandlerSend(e:React.MouseEvent){
// //   let target=e.target  as HTMLButtonElement
// //   alert("Clicked button " +target.innerText)
// // }
// function clickHandlerClick(e:React.MouseEvent<HTMLButtonElement>){

//   let target=e.target  as HTMLButtonElement
//   alert("Clicked button " +target.innerText)
// }
// type objectType={
//   name:string,
//   age:number
// }
// let jsondata:objectType={name:"First",age:20};

// import Test from './Test.tsx';
createRoot(document.getElementById('root')!).render(
 
<BrowserRouter>
<App/>
</BrowserRouter>



)
