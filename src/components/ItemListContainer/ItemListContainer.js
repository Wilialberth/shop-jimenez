import React from "react";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="item-container">
            <span> {greeting} </span>
        </div>
    )
}

export default ItemListContainer