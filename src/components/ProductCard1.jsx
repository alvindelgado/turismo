import React from 'react'
import '../styles/ProductCard.css'



function ProductCard1() {
  return (
    <><h1>Viaje boomerang</h1><p class="descripcion">Es por ello que entendemos el Turismo Solidario como un modo de vivir la Sostenibilidad.</p><section class="card">
        <div class="card__perfil">
        <div class="card__nombre">
                <img class="tor"src="https://titicacatravel-ip.com/wcar/imgs/tours/bolivia/puerta-del-sol-en-tour-tiahuanaco-bolivia-1-dia.jpg" alt=""/>
                <h2>TOUR A TIAHUANACO DE 1 DÍA </h2>
                <p> <del> Antes:800$ </del></p>
                <p>Ahora: 600$</p>
                <hr />
            <div class="card__descripcion">
                <p>Tiahuanaco es el sitio arqueológico más importante de Bolivia, aquí podrá descubrir las ruinas arqueológicas del imperio preincaico más grande de esta parte del continente; la famosa Puerta del Sol es la mayor muestra del grado de perfección en el arte lítico que alcanzó el imperio Tiahuanaco. Sin lugar a dudas el complejo arqueológico no dejará de sorprenderle con su vasta historia</p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>•Recuerde que durante temporada alta como vacaciones de invierno, semana santa y feriados la demanda es importante. Por lo cual se recomienda reservar con anticipación.
                  Las excursiones no incluyen las entradas de ingreso al Museo Lítico y el Museo Cerámico</p>
                <p>• Incluye:</p>
                <p>Desayuno, almuerzo,excursiones, cena, hospedaje y acceso a todas las áreas sociales </p>
            </div>
            <hr />
            <div class="card__button">
                <a class="enlace" href=" ">Obtener</a>
            </div>
            </div>
        </div>
        
      </section></>
  )
}

export { ProductCard1 }