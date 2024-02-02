import React from 'react'
import { Helmet } from 'react-helmet-async';

import './Servicios.scss'
import { BsFillPhoneFill, BsClipboard2Fill , BsFillCollectionPlayFill  } from 'react-icons/bs';
import { BiSolidJoystick } from "react-icons/bi";
import PackageCard from '../../../components/PackageCard/PackageCard';

function Servicios() {
  return (
    <>
    <Helmet>
        <title>Servicios y paquetes | Aplicaciones y videojuegos a medida para tu empresa</title>
        <meta name="description" content="Contamos con varios servicios y paquetes según tus necesidades y presupuesto. Videojuegos, aplicaciones, formularios, páginas web. Proyectos de cero, toma de datos de clientes, apps multiplataforma, marketing."/>
    </Helmet>
    <div className="servicios-container">
        <section className='title'>
            <h1>Nuestros servicios y paquetes</h1>
            <p>Contamos con varios servicios y paquetes según tus necesidades y presupuesto. No te olvides que de requerir algo más especifico podes hacerlo a traves de nuestro mail, telefono o cotizar directo desde la página.</p>
        </section>
        <section className='servicios'>
            <h2>Servicios</h2>
            <div className='iconos'>
                <div>
                    <BiSolidJoystick/>
                    <p>Videojuegos</p>
                </div>
                <div>
                    <BsFillPhoneFill/>
                    <p>Aplicaciones</p>
                </div>
                <div>
                    <BsClipboard2Fill />
                    <p>Formularios</p>
                </div>
                <div>
                    <BsFillCollectionPlayFill />
                    <p>Multimedia</p>
                </div>
            </div>
        </section>
        <section className='paquetes'>
            <div className="background">
                <h2>Paquetes</h2>
                <div className="card-container">
                    <PackageCard img='./assets/servicios/plantilla.jpg' title='Personalizar desde plantilla' link='/portfolio' buttonText='Ver plantillas' description='Si alguno de los juegos o aplicaciones listados en el portfolio se adecua a tus necesidades, podemos personalizar tu juego o aplicación desde esa plantilla y asi reducir costos y tiempos de producción.' />
                    <PackageCard img='./assets/servicios/cero.jpeg' title='Producto desde cero' link='/cotizar' buttonText='Pedir cotización' description='En el caso de que necesites alguna implementación que no este en la lista de plantillas, no hay problema, podes cotizar tu idea con nosotros contactandonos o a traves del formulario de cotización.' />
                    <PackageCard img='./assets/servicios/multiplataforma.jpg' title='Multiplataforma' description='Todos nuestros juegos y aplicaciones son multiplataforma, lo que significa que los vas a poder usar tanto en dispositivos moviles touch como en computadoras, televisores, etc.' />
                    <PackageCard img='./assets/servicios/toma_de_datos.jpg' title='Toma de datos' description='Con nuestros formularios integrados podes tomar datos de tus clientes y guardarlos en base de datos en la nube. Ofrecemos un integración completa donde se puede complementar con juegos de ser necesario.' />
                    <PackageCard img='./assets/servicios/stand.jpg' title='Marketing y publicidad' link='/nosotros#eventos' buttonText='Ver eventos' description='Ofrecemos aplicaciones y juegos interactivos que permiten llevar tu marca a otro nivel, interactuando con tus clientes y dando a conocer tu producto o servicio.' />
                    <PackageCard img='./assets/servicios/proyectos.jpg' title='Idealización de proyectos' link='/cotizar' buttonText='Pedir cotización' description='Si necesitas ayuda para pensar tu proyecto, contamos con experiencia para poder ayudarte y brindarte opciones especificas para tus necesidades.' />
                </div>
                
            </div>
        </section>
    </div>
    </>
  )
}

export default Servicios