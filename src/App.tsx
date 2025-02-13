
//import './App.css'
import test from './data.json';

function Test(){
  return (
    <p>Test Component</p>
  )
}
function App() {
  let data="CodeQuotient";
let arrData:string[]=["First","Second","Third"];
let obj:{name:string,age:number}={
  name:"Test name",
  age:40
}
type objectType={
  name:string,
  age:number
};
let object:objectType={
  name:"First Name",
  age:30
}
let arrObj:objectType[]=test;
 
  return (
    <>
      <div className="bg-red-500 text-white">
        Welcome to Code {data}
        </div>
        <p><ul>{
            arrData.map((item)=>{
              return <li>{item}</li>
            })

          } </ul>
          
          {object.name}
          
          {
            test.map ((item)=>{
              return <p>{item.name}-{item.age}</p>
            })
          }
          </p>
    </>
    
  )
}

export default App
export {Test};

