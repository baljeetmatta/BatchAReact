type objectType={
    name:string,
    age:number
}
type TestProps={
    json:objectType;
}
function Test(props:TestProps)
{
    return (
        <>
        Test Component {props.json.name}

        </>
    )
}
export default Test;