import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
    </div>
    
  );
}

export default App


