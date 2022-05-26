import '../styles/App.css';
import { Tarjeta1 } from "./Tarjeta1";
import {Pagina} from "./Pagina";
import {tarjetas} from "../Api/index";
import {Navegacion} from "../rutas/Navegacion"


function App() {
    return ( 
        <div className='main-layout'>
        <Tarjeta1/>
        <Navegacion/>
        </div>
          
        
    );
}

export default App;