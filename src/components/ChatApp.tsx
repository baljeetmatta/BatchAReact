
import { useEffect, useRef, useState } from "react";
import {io} from "socket.io-client";
const socket=io("http://localhost:3001")
const ChatApp=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);

    
    useEffect(()=>{//mount event
        socket.on("connect",()=>{
            console.log("Connected to server...");
           // socket.emit("user-message","Hello");

        })
        socket.on("msg",(data)=>{
            //console.log("Message : ",data)
           // setMessages([...messages,data]);
           setMessages((prev)=>[...prev,data]);


        })

    },[])
    const sendHandler=()=>{
        socket.emit("user-message",inputRef.current?.value);
    }
    return (
        <>
        Chat App
        <input className="border" ref={inputRef} type="text"/>
        <button onClick={sendHandler}>Send</button>
        {
            messages.map((item)=>{
                return (
                    <>
                    <div>{item}</div>
                    </>
                )
            })
        }
        </>
    )

}
export default ChatApp;

//server code
// import {Server} from "socket.io"
// const io=new Server(3001,{
//     cors:{
//         origin:"*"
//     }
// })
// io.on("connection",(socket)=>{
//     console.log("Connection request received...");
    
//     socket.on("user-message",(data)=>{
//         console.log("Message from Client:",data);
//         //io.emit("msg",data);
//         socket.broadcast.emit("msg",data);

//         //socket.broadcast.emit

//     })

// })