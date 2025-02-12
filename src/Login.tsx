import { useState } from "react";
type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
   // const [user,setUser]=useState<UserType>({} as UserType)
   const [user,setUser]=useState<UserType |null>(null)

const loginHandler=()=>{
setLogin(true);
setUser({name:"Code",email:"Email"});

}
const logoutHandler=()=>{

    setLogin(false);
    setUser({} as UserType)
}

    return (
        <>
       <div>Your current Status is: {isLoggedIn?'Logged in':'Logged out'}</div>
       {user?.name} {user?.email}

        <button onClick={loginHandler}>Log in </button>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}
// const Login=()=>{
//     const [data,setData]=useState("Hi");
//     //console.log(state);
// const clickHandler=()=>{
// //data="Bye";
// setData("Bye");
// console.log(data);

// }


//     return (
//         <>{data} 
//         <button onClick={clickHandler}>Change</button>
//         </>
//     )

// // let data=10;
// //     return (
// //         <>
// //         <div> Value is {data}</div>
// //         <button onClick={()=>{data=20;console.log(data)}}>Click </button>
// //         </>
// //     )
// }
export default Login;

//npm install tailwindcss@3
//npx tailwindsss@3 init
//npx tailwindcss@3 -i ./input.css -o ./output.css