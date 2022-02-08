import React from "react";
import buttonStyle from './Button.module.scss';
const Button = props =>{
    return (
        <button 
        className={buttonStyle.button}
        type={props.type || 'button'}
        onClick = {props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;