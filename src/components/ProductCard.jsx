import React from 'react'
import '../styles/ProductCard.css'



function ProductCard() {
  return (
    <><h1>Promociones</h1><p class="descripcion">¿Quieres reservar unas vacaciones? Independientemente de que busques un viaje familiar o con todo incluido, los paquetes vacacionales que ofrecemos harán que planearlo sea sencillo y económico.</p><section class="card">
        <div class="card__perfil">
        <div class="card__nombre">
                <img class="tor"src="https://offerviajes.com/wp-content/uploads/2018/06/vive_disney_viajes_orlando.jpg" alt=""/>
                <h2>Paquete Familiar</h2>
                <p> <del> Antes: 1500$ </del></p>
                <p>Ahora: 550$</p>
                <hr />
            <div class="card__descripcion">
                <p>Sea desarrollado el Paquete Vacacional "TODO INCLUIDO”, este paquete se comercializa por tiempo limitado y ha sido implementado para retribuir la fidelidad de clientes frecuentes.</p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>• Es de uso estrictamente familiar, no válido para eventos </p>
                <p>• Incluye:</p>
                <p>Desayuno, almuerzo, cena, hospedaje y acceso a todas las áreas sociales </p>
            </div>
            <hr />
            <div class="card__button">
                <a class="enlace" href=" ">Obtener</a>
            </div>
            </div>
        </div>
        <div class="card__perfil">
            <div class="card__nombre">
                <img class="tor" src="https://degodinezaviajeros.com/wp-content/uploads/2019/06/Bora-Bora_2-550x550.jpg" alt="" />
                <h2>Promocion 2x1</h2>
                <p> <del> Antes: 800$ </del></p>
                <p>Ahora: 450$</p>
            </div>
            <hr />
            <div class="card__descripcion">
                <p>Vente de viaje tú y la persona que tú prefieras, por la mitad de precio! Porque cada semana actualizamos una selección de las mejores ofertas de viaje 2x1, con un acompañante gratis o con un descuento para el segundo acompañante.</p>
                <p>Te ahorras hasta el 50% porque viajar solo es muy aburrido, ahora te podrás llevar a un familiar, amigo o compañero de trabajo, da igual quien sea, lo importante es que viváis una experiencia única por muy poco.</p>
            </div>
            <hr />
            <div class="card__button">
            <a class="enlace" href=" ">Obtener</a>
            </div>
        </div>
        <div class="card__perfil">
            <div class="card__nombre">
                <img class="tor" src="data:image/jpeg;base64,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" alt="" />
                <h2>Viaje boomerang</h2>
                <p> <del> Antes: 500$ </del></p>
                <p>Ahora: 250$</p>
            </div>
            <hr />
            <div class="card__descripcion">
                <p>• Tarifas aéreas nacionales o internacionales con tasas</p>
                <p>• Seguro de asistencia y anulación</p>
                <p>• Alojamiento en hoteles mencionados en el itinerario o de categoría similar</p>
                <p>• Desayuno diario completo</p>
                <p>• Todos los traslados y atracciones en vehículos privados con aire acondicionado (excursiones opcionales en autobús turístico)</p>
                <p>• Y Mas....</p>
            </div>
            <hr />
            <div class="card__button">
            <a class="enlace" href=" ">Obtener</a>
            </div>
        </div>
      </section></>
  )
}

export { ProductCard }