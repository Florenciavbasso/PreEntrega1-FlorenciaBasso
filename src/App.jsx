import './App.css';
import NavBar from  './components/NavBarFolder/NavBar';
import ItemListContainer from './components/GreetingContainer/ItemListContainer'

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidxs a charra!'}/>
      </div>



  );
}

export default App;
