import Buzo from "../assets/Buzos/Buzo.jpg"
import Remera from "../assets/Remeras/Remera.jpg"
import Camisa from "../assets/Camisas/Camisa.jpg"
import Jean from "../assets/Jeans/Jean.jpg"

const products = [
    {id: '01', tipo: 'Buzo', descr: "Un buzo para vos", stock: 10, img: {Buzo}},
    {id: '02', tipo: 'Remera', descr: "Una remera canchera", stock: 17, img: {Remera}},
    {id: '03', tipo: 'Camisa', descr: "Una camisa concisa", stock: 17, img: {Camisa}},
    {id: '04', tipo: 'Jean', descr: "Un jean groso", stock: 17, img: {Jean}},
]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(() => {
        if(condition){
            resolve (products)
        }else{
            reject('Página en construcción')
        }
    }, 2000);
})