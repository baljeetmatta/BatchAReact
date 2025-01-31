import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Greet from './Greet.tsx';
import Button from './Button.tsx';
function clickHandlerSend(){
  alert("Clicked Send button")
}
function clickHandlerClick(){
  alert("Clicked Click button")
}
type objectType={
  name:string,
  age:number
}
let jsondata:objectType={name:"First",age:20};

import Test from './Test.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Greet name="CodeQuotient" years={12}/>
    <Greet name="Chitkara"/> */}
    {/* <Button/>

    <Button/> */}
    {/* <Button value="Send" click={clickHandlerSend}/>

   <Button value="Click" click={clickHandlerClick}/>
     */}
     <Greet name="CodeQuotient">
      
      <Test json={jsondata}/>
     </Greet>


  </StrictMode>,
)
