
import '../styles/App.css';
import {Card} from "./Card";
import {Tarjeta1} from "./Tarjeta1";

function App(props) {
  const list=props.list
  return (
     <div className='App'>
       <Tarjeta1/>
       {list.map((cartas)=>
     <Card imge={cartas.imge} 
     title={cartas.title} 
     descripcion={cartas.descripcion} 
     salida={cartas.salida} 
     viaje={cartas.viaje} 
     costo={cartas.costo} />)}
     </div>
  );
}

export default App;
