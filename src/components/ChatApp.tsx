
import { useEffect, useRef, useState } from "react";
import {io} from "socket.io-client";
const socket=io("http://localhost:3001")
const ChatApp=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
    const inputRoomRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);
const [room,setRoom]=useState<string>("");
    
    useEffect(()=>{//mount event
        
        socket.on("connect",()=>{
            console.log("Connected to server...");
           // socket.emit("user-message","Hello");

        })
        socket.on("room-joined",(data)=>{
            setRoom(data);

        })
        socket.on("msg",(data)=>{
            //console.log("Message : ",data)
           // setMessages([...messages,data]);
           setMessages((prev)=>[...prev,data]);


        })
        return ()=>{socket.disconnect()}

    },[])
    const sendHandler=()=>{
        socket.emit("user-message",inputRef.current?.value);
    }
    const roomHandler=()=>{
        socket.emit("room-join",inputRoomRef.current?.value);

    }
    if(room=="")
    {
        return (
            <>
            <div><input className="border" ref={inputRoomRef} type="text"/>
            <button onClick={roomHandler}>Enter Room</button></div>
            </>
        )
    }
    return (
        <>
        Chat App {room}
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