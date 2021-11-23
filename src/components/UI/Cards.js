import React, { Component } from "react";

class Card extends Component {
    render(){
        const card = `${"col-6 align-self-center border rounded my-5 bg-light text-center"} ${this.props.className} `
        return(
            <div className={card}>{this.props.children}</div>
        )
    }
}
export default Card