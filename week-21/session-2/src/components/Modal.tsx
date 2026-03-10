import ReactDOM from "react-dom"
function Modal() {
    const modalRoot= document.getElementById("modal-root") as HTMLElement;
    return ReactDOM.createPortal(<div style={{
            position: "fixed",
            top:"40%",
            left:"40%",
            background:"white",
            padding:"20px",
            border: "1px solid black"
        }}>
            <h2>Modal Window</h2>
            <p>This is rendering using Portal</p>
        </div>, modalRoot)
}

export default Modal;