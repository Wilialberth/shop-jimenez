import React from "react";
import Cart from "../../assets/cart_widget.jpg";
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <div className="cart-widget">
            <span className="material-symbols">
                <img src={Cart} alt="Carrito" />
            </span>
        </div>      
        
    )
}

export default CartWidget