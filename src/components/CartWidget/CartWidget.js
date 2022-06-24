import React from "react";
import Cart from "../../assets/cartWidget1.jpg";
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <div>
            <img src={Cart} alt="shopping cart" />            
        </div>
        
    )
}

export default CartWidget