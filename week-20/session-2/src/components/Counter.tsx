import { Component } from "react";

interface State {
    count: number;
}
//Class Name<Props,State>
class Counter extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { 
            count:0  //initial Value
        };
    }
    //arrow function will not allow its own this
    increment=()=>{
        this.setState({count: this.state.count+1 })
    }
    decrement=()=>{ 
        //write login to show alert if the value become 0
        this.setState({count: this.state.count-1 })
    }
    render() { 
        return ( <>
            <h2>Counter: {this.state.count} </h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </> );
    }
}
 
export default Counter;