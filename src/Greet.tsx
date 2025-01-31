type GreetProps={
    name:string,
    years?:number
    children:React.ReactNode
}
function Greet(props:GreetProps)
{
    return (
        <>
        <div>Welcome to {props.name} - {props.years} - {props.children}</div>       
        </>
    )
}
export default Greet;
