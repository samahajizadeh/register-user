import React from "react";
const Card =(props)=>{
    const card = `${"col-6 border rounded my-5 bg-light text-center"} ${props.className} `
    return(
        <div className={card}>{props.children}</div>
    )
}
export default Card