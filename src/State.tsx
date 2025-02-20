import React from "react";
type StateProps={
    name:string
}
type StateType={
    IsLoggedIn:boolean,
    years:number;
}
class State extends React.Component<StateProps,StateType>
{
    state={IsLoggedIn:false,years:10};

    // useState X setState

    //props--object - StateProps
    //state--object - StateType
    clickHandler=()=>{
        //this.setState({IsLoggedIn:true});
        // this.setState({years:this.state.years+1});
        // this.setState({years:this.state.years+3});
        // this.setState({years:this.state.years+2});
      //  this.setState((prevState)=>{return {years:prevState.years+1}})
      //  this.setState((prevState)=>{return {years:prevState.years+1}})
       // this.setState((prevState)=>{return {years:prevState.years+1}})



    }
    render(){
        return (
            <>
            {this.state.years}
            {this.state.IsLoggedIn?'Logged in':'Logged out'}
            {this.props.name}
            <button onClick={this.clickHandler}>Click me</button>

            </>
        )
    }

}
export default State;
