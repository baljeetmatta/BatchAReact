import { ChangeEvent, useState } from "react";

const UI=()=>{
   // let textData="";
   const [textData,setText]=useState("");

    const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        //let target=e.target as HTMLInputElement;
        //textData=target.value;
        //textData=e.target.value;
        setText(e.target.value);

    }
    const printHandler=()=>{
        alert(textData);
        
    }
    const updateHandler=()=>{
        //textData="Hi";
        setText("Hi");
        
        console.log(textData);

    }
    return (
        <>
        <div>
            <input type="text" onChange={changeHandler} value={textData}/>
            <button onClick={printHandler}>Print</button>    
            <button onClick={updateHandler}>Update Data</button>
        </div></>
    )


}
export default UI;
