import React from 'react';
type GreetClassProps={
    name:string;
}
class GreetClass extends React.Component<GreetClassProps>

{
    clickHandler=()=>{
        alert("clicked")
    }
    render()
    {
        return (
            <>
            Class {this.props.name}
            <button onClick={this.clickHandler}>Click </button>

            </>
        )
    }

}
export default GreetClass;
