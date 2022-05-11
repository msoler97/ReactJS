import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBar from "./components/NavBar/NavBar.js";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Selecciona la cantidad'}/>
    </div>
  );
}
