import './message.css'
function Message(){
    
    return(
        <div>
            <h1>This is My Message Component</h1>
            <p>This is My Para</p>
        </div>
    )
}

export default Message;

//  Message is just a Simple React function
//  which returning html code (JSX) javascript Extention
// calling React.createElement 

// this is given to DOM to render

//  Component Rules

//  starts with Capital Letter
// return JSX
//  must export if written in seperate file or use it in same file after creation