import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.scss';
import ReactDOM from "react-dom";
const ErrorModal = (props) =>{
    debugger;
    const BackDrop = props =>{
       return (<div className={classes.backdrop} onClick={props.onConfirm}></div>);
    }

    const ModalOverlay = props =>{
        return (
            <Card className={classes.modal}>
                <header>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        )
    }

    return(
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />, document.getElementById('modal-root'))}
        </React.Fragment>
    )
}

export default ErrorModal;