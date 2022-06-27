import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/Navbar/NavBar';
import Item from "./components/Item/item"




const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda"} /> 
      <ItemCount />   
      <Item /> 
    </div>
    
  );
}

export default App