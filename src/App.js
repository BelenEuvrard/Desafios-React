import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componentes/NavBar/NavBar";
import { HomePag} from "./HomePag/HomePag";
import { ContactoPag } from './ContactoPag/ContactoPag';
import { ItemListContainer} from "./componentes/Container/ItemListContainer";
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer"
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    
        <NavBar/>
    
       

        <Switch>
        <Route exact path="/Home">
             <HomePag/>
          </Route>

          <Route exact path="/Adopciones">
              <ItemListContainer />
          </Route>

          <Route exact path="/Adopciones/:categoryId">
              <ItemListContainer />
          </Route>

          <Route exact path="/Machos/:itemId">
          <ItemDetailContainer />
          
        </Route>

        
          <Route exact path="/contacto">
              <ContactoPag/>
          </Route>

          <Route exact path="/cart">
            {/* TODO: hacer vista carrito */}
            <h2>Carrito</h2>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          {/* <Route path="*">
              <h2>404... no encontrado</h2>
          </Route> */}
        </Switch>

    </BrowserRouter>
    </>

  );
}

export default App;
