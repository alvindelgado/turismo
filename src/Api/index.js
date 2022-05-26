import yungas from "../assets/CMYungas.jpg"
import copacabana from "../assets/Copacabana.png"
import dragon from "../assets/Dragon Dormido.jpg"
import illimani from "../assets/Illimani.jpg"
import puerta from "../assets/Puerta del sol.jpg"
import luna from "../assets/Valle De La Luna.jpg"
const tarjetas = []
const new1 = {
    key: "1",
    title: "Los Yungas",
    imge: yungas,
    dias: "Fines de semana",
    descuento: "%15",
    producto: "product-1"
}
tarjetas.push(new1)
const new2 = {
    key: "2",
    title: "Copacabana",
    imge: copacabana,
    dias: "Solo sabados",
    descuento: "%40",
    producto: "product-2"
}
tarjetas.push(new2)
const new3 = {
    key: "3",
    title: "Dragon dormido",
    imge: dragon,
    dias: "Fines de semana",
    descuento: "%20",
    producto: "product-3"
}
tarjetas.push(new3)
const new4 = {
    key: "4",
    title: "El Illimani",
    imge: illimani,
    dias: "Solo miercoles",
    descuento: "%15",
    producto: "product-4"
}
tarjetas.push(new4)
const new5 = {
    key: "5",
    title: "Puerta del sol",
    imge: puerta,
    dias: "Martes y jueves",
    descuento: "%10",
    producto: "product-5"
}
tarjetas.push(new5)
const new6 = {
    key: "6",
    title: "Valle de la luna",
    imge: luna,
    dias: "Martes y jueves",
    descuento: "%25",
    producto: "product-6"
}
tarjetas.push(new6)
export { tarjetas }