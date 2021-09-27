/*import { HomeView } from "./componentes/HomeView/HomeView";*/
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer} from "./componentes/Container/ItemListContainer";

function App() {
  return (
    <>
     <NavBar/>
    
    <ItemListContainer titulo="PRIMER TITULO" contenido="Parrafo" />
    </>
  );
}

export default App;
