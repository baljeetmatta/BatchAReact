import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Controls from './Controls'
import GreetClass from './GreetClass'
import Login from './Login'
import Banner from './Banner'
import UI from './UI'
import Parent from './Parent'
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
  <StrictMode>
    {/* <Greet name="CodeQuotient" years={12}/>
    <Greet name="Chitkara"/> */}
    {/* <Button/>

    <Button/> */}
    {/* <Button value="Send" click={clickHandlerSend}/>

   <Button value="Click" click={clickHandlerClick}/>
     */}
     {/* <Button value="Click" click={clickHandlerClick}/>
     <Button value="Send" click={clickHandlerClick}/>

     <Greet name="CodeQuotient">
      
      <Test json={jsondata}/>
     </Greet> */}
{/* <Controls/> */}
{/* 
<GreetClass name="CodeQuotient"/> */}
{/* <Login/> */}
{/* <Banner/> */}
{/* <UI/> */}
<Parent/>


  </StrictMode>,
)
