import { Itemlistcontainer } from "./components/Itemlistcontainer";
import { Navbar } from "./components/navbar";
import "./App.css";
import { ItemCount } from "./components/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer aviso={"Ejemplo"} />
      <ItemCount
        initial={1}
        stock={20}
        onAdd={(quantity) => console.log("Agregaste ", quantity)}
      />
    </div>
  );
}

export default App;
