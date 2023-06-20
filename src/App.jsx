import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Itemlistcontainer } from "./components/Itemlistcontainer";
import { Navbar } from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Itemlistcontainer aviso={"Ejemplo"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer itemId={1} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
