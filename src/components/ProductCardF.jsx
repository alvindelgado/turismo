import React from 'react'
import '../styles/ProductCard.css'



function ProductCardF() {
  return (
    <><h1>Paquete 2x1</h1><p class="descripcion">Vente de viaje tú y la persona que tú prefieras, por la mitad de precio! Porque cada semana actualizamos una selección de las mejores ofertas de viaje 2x1, con un acompañante gratis o con un descuento para el segundo acompañante.</p>
    <p class="descripcion"> Te ahorras hasta el 50% porque viajar solo es muy aburrido, ahora te podrás llevar a un familiar, amigo o compañero de trabajo, da igual quien sea, lo importante es que viváis una experiencia única por muy poco.</p>
    <section class="card">
        <div class="card__perfil">
        <div class="card__nombre">
                <img class="tor"src="https://www.laregion.bo/wp-content/uploads/2015/10/cotapata2.jpg" alt=""/>
                <h2>2 x 1 en Coroico</h2>
                <p> <del> Antes: 2000$ </del></p>
                <p>Ahora: 1000$</p>
                <hr />
            <div class="card__descripcion">
                <p>Reservando tu hotel en Coroico, podrás visitar lugares tan fascinantes como el Parque Nacional Cotapata. Allí se halla el valle del río Huarinilla. El Parque Nacional de Cotapata está situado en las provincias Murillo y Nor Yungas del Departamento de La Paz. Su superficie abarca 40mil hectáreas y su altitud oscila entre los 5.900 a 1000 metros sobre el nivel del mar.</p>
                <p>Reservando tus vacaciones, acertarás seguro. Una vez allí, serás testigo de la belleza de los majestuosos nevados, lagunas de altura, cabeceras de montañas, bosques de yungas y otras ecoregiones ricas en biodiversidad. En la parte intermedia al descender por el parque, se observan pequeños y encantadores poblados, en los que habitan personas que subsisten de las actividades de siembra y ganadería.</p>           
            </div>
            <hr />
            <div class="card__button">
                <a class="enlace" href=" ">Obtener</a>
            </div>
            </div>
        </div>
        <div class="card__perfil">
            <div class="card__nombre">
                <img class="tor" src="https://www.travelandes.com/img/GalleryContent/112651/islaluna3.jpg" alt="" />
                <h2>2 x 1 en la Isla de la Luna </h2>
                <p> <del> Antes: 1600$ </del></p>
                <p>Ahora: 800$</p>
            </div>
            <hr />
            <div class="card__descripcion">
                <p>También llamada Isla Coatí, es otro de los lugares sagrados para los incas dentro del Lago Titicaca. Se encuentra junto a la Isla del Sol </p>
                <p>Aquí encuentra el Palacio de las Vírgenes del Sol o Iñakuyo, una edificación bien conservada con 35 habitaciones y puertas talladas. Las vírgenes del sol eran mujeres escogidas y se les enseñaban diversos oficios para ser sacerdotisas. Podían ser concubinas del inca y también ser usadas para sacrificios.</p>
                <p>En la actualidad, la isla cuenta con una comunidad organizada en torno al turismo, con actividades como artesanía, agricultura y crianza de animales</p>
                <p>Atracciones:</p>
                <p>•Arqueología, ecoturismo, áreas naturales.   </p>
            </div>
            <hr />
            <div class="card__button">
            <a class="enlace" href=" ">Obtener</a>
            </div>
        </div>
        
      </section></>
  )
}

export { ProductCardF }