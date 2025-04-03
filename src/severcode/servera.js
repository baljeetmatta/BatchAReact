import {Server} from "socket.io"
const io=new Server(3001,{
    cors:{
        origin:"*"
    }
})
//ROOMS
let roomno=1;
let users=0;
let socketRooms=[];
io.on("connection",(socket)=>{
    console.log("Connection request received...");
    // let room="room-"+roomno;
    // socket.join(room);
    // users++;
    // if(users>=2)
    // {
    //     roomno++;
    //     users=0;
    // }
    // socket.emit("room-joined",room);

    socket.on("room-join",(data)=>{
        socket.join (data);
        socketRooms.push({
            socket:socket.id,
            room:data
        })
        socket.emit("room-joined",data);
        //socket.emit("msg","A new user joined");
        io.in(data).emit("msg","A new user joined");
    })

    socket.on("user-message",(data)=>{
        console.log("Message from Client:",data);
        //io.emit("msg",data);
        //io.emit("msg",data);
        //io.in(room).emit("msg",data)
        //socket.broadcast.emit
        const filtered=socketRooms.filter((item)=>{
            if(item.socket==socket.id)
                return true;
        });
        io.in(filtered[0].room).emit("msg",data);

        

    })

})