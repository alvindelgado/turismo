import React from 'react'
import '../styles/ProductCard.css'
import{Link} from "react-router-dom"


function ProductCardB() {
  return (
    <><h1>Paquete Familiar</h1><p class="descripcion">Sea desarrollado el Paquete Vacacional "TODO INCLUIDO”, este paquete se comercializa por tiempo limitado y ha sido implementado para retribuir la fidelidad de clientes frecuentes.</p><section class="card">
    <div class="card__perfil">
        <div class="card__nombre">
                <img class="tor"src="https://boliviamia.net/Images/Attractionphotos/isla-del-sol-06.jpg" alt=""/>
                <h2>Isla del Sol-Hotel Jardin del Inca</h2>
                <p> <del> Antes: 1500$ </del></p>
                <p>Ahora: 550$</p>
                <hr />
            <div class="card__descripcion">
                <p>Disfrute de una descanso en familia, en la población Yumani y el resto en Challapampa. La Isla del Sol se encuentra en el extremo noroeste de la península de Copacabana, Bolivia</p>
                <p>La Isla del Sol se puede visitar todo el año y goza de un clima semi-árido frío y las temperaturas durante el año varía entre 25°C a 15°C durante el día mientras que por la noche las temperaturas bajan drásticamente, incluso por debajo de los 0ºC. </p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>• Es de uso estrictamente familiar, no válido para eventos </p>
                <p>Incluye:</p>
                <p>• 2 días</p>
                <p>• 1 noche</p>
                <p>• Acomodación Doble</p>
                <p>• Vigencia: 30/05/2022 - 19/12/2022</p>
            </div>
            <hr />
            <div class="card__button">
            <Link to="/pagos" style={{ textDecoration:"none"}}><button>Obtener</button></Link>
            </div>
            </div>
        </div>
        <div class="card__perfil">
            <div class="card__nombre">
                <img class="tor" src="https://boliviamia.net/Images/Attractionphotos/chacaltaya-01.jpg" alt="" />
                <h2>Chacaltaya - Hotel Rosario </h2>
                <p> <del> Antes: 1200$ </del></p>
                <p>Ahora: 900$</p>
            </div>
            <hr />
            <div class="card__descripcion">
                <p>Es un empinado viaje de 90 minutos desde el centro de La Paz, y la cumbre accesible por un fácil ascenso de 200 metros desde allí.</p>
                 <p>El Hotel Rosario situado en el corazón del distrito de los museos de La Paz, a tan sólo 5 minutos a pie de la estación de tren, el Hotel Rosario ofrece cómodas habitaciones en una antigua casa colonial. </p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>• Es de uso estrictamente familiar, no válido para eventos </p>
                <p>Incluye:</p>
                <p>• 3 días</p>
                <p>• 2 noches</p>
                <p>• Acomodación Triple</p>
                <p>• Vigencia: 30/05/2022 - 18/12/2023</p>
            </div>
            <hr />
            <div class="card__button">
            <Link to="/pagos" style={{ textDecoration:"none"}}><button>Obtener</button></Link>
            </div>
        </div>
        <div class="card__perfil">
            <div class="card__nombre">
                <img class="tor" src="https://d2poxrheyfxwbo.cloudfront.net/resize/780x500/filters:max_age(2604800):quality(65)/s3/hotel/df42cd8c-6522-4bb6-9a13-e458026683a1" alt="" />
                <h2>Coroico- Hotel Rio Selva Resort - 3 noches</h2>
                <p> <del> Antes: 1500$ </del></p>
                <p>Ahora: 1200$</p>
            </div>
            <hr />
            <div class="card__descripcion">
                <p>Ubicado a 91 Km. de la ciudad de La Paz, a 2 horas de viaje por la nueva carretera asfaltada Cota Pata-Santa Bárbara; cuenta con toda la infraestructura para garantizarle su vacaciónes, eventos, seminarios o talleres. Actualmente tiene una capacidad de hospedaje de 710 personas en el plan familiar y de 415 personas en seminarios. Puede disfrutar de 168 unidades de hospedaje de 1 y 2 dormitorios, todas con baño privado, frigobar, Tv cable en cada dormitorio, y mas.</p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>• Es de uso estrictamente familiar, no válido para eventos </p>
                <p>Incluye:</p>
                <p>• 4 días</p>
                <p>• 3 noches</p>
                <p>• Acomodación Triple</p>
                <p>• Vigencia:  16/01/2022-21/12/2022</p>
            </div>
            <hr />
            <div class="card__button">
            <Link to="/pagos" style={{ textDecoration:"none"}}><button>Obtener</button></Link>
            </div>
        </div>
      </section></>
  )
}

export { ProductCardB }