import React from 'react'
import './Servicios.scss'
import { BsJoystick, BsPhone, BsClipboard2, BsCameraVideo } from 'react-icons/bs';
import PackageCard from '../../../components/PackageCard/PackageCard';

function Servicios() {
  return (
    <div className="servicios-container">
        <section className='title'>
            <h1>Nuestros servicios y paquetes</h1>
            <p>Contamos con varios servicios y paquetes según tus necesidades y presupuesto. No te olvides que de requerir algo más especifico podes hacerlo a traves de nuestro mail, telefono o cotizar directo desde la página.</p>
        </section>
        <section className='servicios'>
            <h2>Servicios</h2>
            <div className='iconos'>
                <div>
                    <BsJoystick/>
                    <p>Videojuegos</p>
                </div>
                <div>
                    <BsPhone/>
                    <p>Aplicaciones</p>
                </div>
                <div>
                    <BsClipboard2/>
                    <p>Formularios</p>
                </div>
                <div>
                    <BsCameraVideo/>
                    <p>Multimedia</p>
                </div>
            </div>
        </section>
        <section className='paquetes'>
            <h2>Paquetes</h2>
            <div className="background">
                <PackageCard img='./assets/servicios/plantilla.jpg' title='Personalizar desde plantilla' link='/portfolio' description='Si alguno de los juegos o aplicaciones listados en el portfolio se adecua a tus necesidades, podemos personalizar tu juego o aplicación desde esa plantilla y asi reducir costos y tiempos de producción.' buttonText='Ver plantillas' />
            </div>
        </section>
    </div>
  )
}

export default Servicios