import React from "react";
type CTimerState={
    count:number
}
type CTimerProps={}

class CTimer extends React.Component<CTimerProps,CTimerState>
{
    state={count:1};
// constructor(props:CTimerProps)

// {
//     super(props);
//     setInterval(this.test,1000)

// }
componentDidMount(): void {
    setInterval(this.test,1000)
}
test=()=>{
    this.setState({count:this.state.count+1});
}

    render()
    {
        return (
            <>{this.state.count}</>
        )
    }

}
export default CTimer;