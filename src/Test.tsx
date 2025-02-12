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
//1. Module install
// npm install tailwindcss @tailwindcss/vite
//2. Vite Config 
// import tailwindcss from '@tailwindcss/vite'
//plugins:[react(),tailwindcss()]
//3. index.css
// @import "tailwindcss"