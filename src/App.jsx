import { Itemlistcontainer } from "./components/Itemlistcontainer";
import { Navbar } from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer aviso={"Ejemplo"} />
    </div>
  );
}

export default App;
