import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer} from "./componentes/Container/ItemListContainer";

function App() {
  return (
    <>
     <NavBar/>
    
    <ItemListContainer />
    </>
  );
}

export default App;
