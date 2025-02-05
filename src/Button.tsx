import { MouseEvent, MouseEventHandler } from 'react';
import './App.css'
// function clickHandler(e:MouseEvent)
// {
//     //let target=e.target as HTMLButtonElement;

//     alert("Clicked");//+target.innerText);

// }
// function Button()
// {
//     return (
//         <>
//         <button onClick={clickHandler}>click me</button>
//         </>
//     )
// }
type ButtonProps={
    value:string,
    click:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}
function Button(props:ButtonProps)
{
    return (
        <>
        <button onClick={props.click}>{props.value}</button>
        
        </>
    )
}
export default Button;