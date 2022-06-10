import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import imge1 from"../Formas/master.png"
import imge2 from"../Formas/Pay.png"
import imge3 from"../Formas/tigo.png"
import imge4 from"../Formas/visa.png"
import imge5 from"../Formas/bitcoin.png"


const Pagos = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					nit:''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					if(!valores.nit){
						errores.nit = 'Por favor ingresa numero de NIT o CI'}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<label htmlFor="titulo">Formulario de Pago</label>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="nit">NIT/CI</label>
							<Field
								type="text" 
								id="nit" 
								name="nit" 
								placeholder="NIT/CI"
							/>
			
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

					
						<label htmlFor="Formas de pago" >Formas de pago</label>
						<div className='formas'>
							<label>
								<Field type="radio" name="master" value="master" /> 
								 Master Card 
								<img className='pagos' src={imge1} alt=""/>
							</label>
							<label>
								<Field type="radio" name="paypal" value="paypal" /> 
								 Paypal
								<img className='pagos' src={imge2} alt=""/>
							</label>
							<label>
								<Field type="radio" name="tigo" value="tigo" /> 
								 Tigo Money
								<img className='pagos' src={imge3} alt=""/>
							</label>
							<label>
								<Field type="radio" name="visa" value="visa" /> 
								 Visa
								<img className='pagos' src={imge4} alt=""/>
							</label>
							<label>
								<Field type="radio" name="bitcoin" value="bitcoin" /> 
								 BitCoin
								<img className='pagos' src={imge5} alt=""/>
							</label>
							
						</div>


						<button type="submit">Pagar</button>
						{formularioEnviado && <p className="exito">El Pago se realizo con exito</p>}
					</Form>
				)}


			</Formik>
		</>
	);
}
 
export {Pagos};