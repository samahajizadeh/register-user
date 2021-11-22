import React from "react";

const Button = (props)=>{
    const UIbtn = `${"btn"} ${props.className}`
    return <button type={props.type} className={UIbtn} onClick={props.onClick}>{props.children}</button>

}

export default Button;