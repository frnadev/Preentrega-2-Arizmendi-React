import { ItemCount } from "./components/ItemCount";
import { Itemlistcontainer } from "./components/Itemlistcontainer";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer aviso={"Ejemplo"} />
      <ItemCount />
    </div>
  );
}

export default App;
