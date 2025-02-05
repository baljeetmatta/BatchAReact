// function Controls()
// {
//     return (
//         <>Controls</>
//     )
// }
// export default Controls
// const Controls=()=>{
//     return (
//         <>Controls</>
//     )
// }
// export default Controls
// type ControlProps={
//     name:string
// }
// const Controls:React.FC<ControlProps>=(props:ControlProps)=>{
//     return (
//         <>Controls</>
//     )
// }
// export default Controls
// import React from 'react';

import { ChangeEvent } from "react";

// interface Props {
  
// }

// const Component: React.FC<Props> = ({name  }) => {
//   return (
//     <></>
//   );
// };

// export default Component;
// const clickHandler=(e:React.MouseEvent,id:number)=>{

// }
// const Controls=()=>{
//     return (
//         <>
//         <button onClick={(e)=>{clickHandler(e,1)}}>Click me</button>
//         </>
//     )
// }
// export default Controls;

// const clickHandler=(e:React.MouseEvent)=>{

//     anotherFunction(e,1);

// }
// const Controls=()=>{
//     return (
//         <>
//         <button onClick={clickHandler}>Click me</button>
//         </>
//     )
// }
// export default Controls;
let textData="";
const changeHandler=(e:ChangeEvent)=>{

    let target=e.target as HTMLInputElement;
    textData=target.value;
    console.log(textData);

}
const clickHandler=()=>{
    alert(textData);
    
}
const Controls=()=>{
    return (
        <>
        <div>
            <input type="text" onChange={changeHandler}/>
            <button onClick={clickHandler}>Print</button>
        </div>
        </>
    )
}
export default Controls;