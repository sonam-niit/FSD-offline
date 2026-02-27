import { Component } from "react";

interface MyType{
    id: number,
    name: String
}
class Welcome extends Component {
    constructor(props: MyType){
        super(props)
    }
    render() { 
        return ( 
            <h1>Hello From Welcome Component</h1>
         );
    }
}
 
export default Welcome;

// constructor and render called when componentMount