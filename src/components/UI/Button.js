import React, { Component } from "react";

class Button extends Component{
    render(){
        const UIbtn = `${"btn"} ${this.props.className}`
        return(
            <button type={this.props.type || 'button'} className={UIbtn} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}</button>
        )
    }
}
// const Button = (props)=>{
//     const UIbtn = `${"btn"} ${props.className}`
//     return <button type={props.type} className={UIbtn} onClick={props.onClick}>{props.children}</button>

// }

export default Button;