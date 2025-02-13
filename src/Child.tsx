type ChildProps={
    data:string
    fun:(args:string)=>void;
}
const Child=(props:ChildProps)=>{
    const changeHandler=()=>{
        //props.data="Bye";
        props.fun("Bye")

    }
    return (
        <><div>Child {props.data}</div>
        <div><button onClick={changeHandler}>Change</button></div>
        
        </>
    )
}
export default Child;
