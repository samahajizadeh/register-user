import React, { Component } from "react";

class Card extends Component {
    render(){
        const card = `${"col-6 border rounded my-5 bg-light text-center"} ${this.props.className} `
        return(
            <div className={card}>{this.props.children}</div>
        )
    }
}
// const Card =(props)=>{
//     const card = `${"col-6 border rounded my-5 bg-light text-center"} ${props.className} `
//     return(
//         <div className={card}>{props.children}</div>
//     )
// }
export default Card