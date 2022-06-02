import coroico from "../imagenes/coroico.jpg"
import copacabana from "../imagenes/copacabana.png"
import illimani from "../imagenes/illimani.jpg"
import sorata from "../imagenes/sorata.jpg"
import tiwa from "../imagenes/tiwa.jpg"
const clon = []
const newcard1 = {
   imge: coroico,
   title:"COROICO",
   descripcion:"Coroico es una pequeña ciudad y municipio boliviano, capital de la provincia de Nor Yungas del Departamento de La Paz. Se encuentra ubicada al noreste del departamento de La Paz, y al este de la cordillera Oriental de los Andes, en la región de los Yungas.",
   salida:"Todos los Dias",
   viaje:"3h",
   costo:"30$"
}
clon.push(newcard1)
const newcard2 = {
    imge: copacabana,
    title:"COPACABANA",
    descripcion:"Copacabana es una ciudad boliviana en el lago Titicaca, conocida por los festivales religiosos y las casas con tejados rojos. Es una base para explorar la Isla del Sol y la Isla de la Luna, que tienen sitios arqueológicos incas sagrados.",
    salida:"Todos los Dias",
    viaje:"4h",
    costo:"50$"
 }
 clon.push(newcard2)
 const newcard3 = {
    imge: sorata,
    title:"SORATA",
    descripcion:"Sorata es una localidad de Bolivia, capital de la provincia de Larecaja a 150 km de la ciudad de La Paz. Está situada a una altura de 2674 m, tiene un clima templado y se encuentra al pie del Nevado Illampu, una de las montañas más altas de Bolivia..",
    salida:"Todos los Dias",
    viaje:"7h",
    costo:"15$"
 }
 clon.push(newcard3)
 const newcard4 = {
    imge: illimani,
    title:"ILLIMANI",
    descripcion:"El Illimani, con 6.460 metros sobre el nivel del mar, es una montaña de Bolivia, ubicada cerca de la ciudad de La Paz. Es la mayor altura de la Cordillera Real y la segunda de Bolivia.",
    salida:"Todos los Dias",
    viaje:"6h",
    costo:"100$"
 }
 clon.push(newcard4)
 const newcard5 = {
    imge: tiwa,
    title:"TIHUANACO",
    descripcion:"Tiahuanaco o Tiwanaku es un pequeño poblado ubicado en el altiplano boliviano en la margen oriental del río Tiwanaku, a 15 km al sudeste del lago Titicaca y a 67 km de la ciudad de La Paz.",
    salida:"Todos los Dias",
    viaje:"1h 30m",
    costo:"10$"
 }
 clon.push(newcard5)
 export {clon}