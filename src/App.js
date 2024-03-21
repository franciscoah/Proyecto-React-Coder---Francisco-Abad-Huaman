
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Welcome to my yard sale!'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)} />
    </div>
  );
}

export default App;
