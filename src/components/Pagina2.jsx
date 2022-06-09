import {Card} from "./Card";
import "../styles/Pagina2.css"
function Pagina2(props) {
  const list=props.list
  return (
     <div className='Pagina2'>
       {list.map((Cartas2)=>
     <Card imge={Cartas2.imge} 
     title={Cartas2.title} 
     descripcion={Cartas2.descripcion} 
     salida={Cartas2.salida} 
     viaje={Cartas2.viaje} 
     costo={Cartas2.costo} />)}
     </div>
  );
}

export {Pagina2}