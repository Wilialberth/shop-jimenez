import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { getData } from "../../mocks/PseudoApp";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    const[productList, setProductList] = useState ([])
    const [loading, setLoading]=useState(true)

   

    useEffect (()=>{
        getData
        .then((result)=>setProductList(result))
        .catch ((error) => console.log(error))
        .finally (()=>setLoading(false)) 
        
    }) 
    console.log(productList);

    const onAdd = (cantidad) => {
        console.log(`Felicidades, compraste ${cantidad} unidades`);
    }

    return(
        <div>
            <span> {greeting} </span>
            {loading ? <p>Cargando, gracias por esperar.</p> : <ItemList productList={productList}/>}
            <ItemCount initial = {1} stock = {10} onAdd = {onAdd} />
            
        </div>
    )
}

export default ItemListContainer