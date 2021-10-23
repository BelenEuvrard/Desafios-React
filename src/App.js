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
import { CartProvider} from "./context/CartContext"
import { CartScreen} from "./componentes/Cart/Cart"


function App() {
  return (
    <>

    <CartProvider>


    <BrowserRouter>
    
        <NavBar/>
    
       

        <Switch>
        <Route exact path="/">
             <HomePag/>
          </Route>

          <Route exact path="/Adopciones">
              <ItemListContainer />
          </Route>

          <Route exact path="/Adopciones/:categoryId">
              <ItemListContainer />
          </Route>

          <Route exact path="/Detail/:itemId">
          <ItemDetailContainer />
          
        </Route>

        
          <Route exact path="/contacto">
              <ContactoPag/>
          </Route>

          <Route exact path="/cart">
               < CartScreen/>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          {/* <Route path="*">
              <h2>404... no encontrado</h2>
          </Route> */}
        </Switch>

    </BrowserRouter>
    
    
    </CartProvider>

    </>

  );
}

export default App;
