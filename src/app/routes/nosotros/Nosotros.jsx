import React from 'react'
import { Helmet } from 'react-helmet-async';
import Carousel from '../../../components/Carousel/Carousel'
import './Nosotros.scss'

import { BsCalendarCheckFill, BsPeopleFill, BsTools, BsLightbulbFill, BsPencilSquare, BsDatabaseFill  } from 'react-icons/bs';

import DefaultImage from '../../../assets/default.jpg'

function Nosotros() {
  return (
    <>
    <Helmet>
        <title>Acerca de nosotros | MILO lab</title>
        <meta name="description" content="Somos una empresa con una trayectoria de más de 7 años especializada en el desarrollo de aplicaciones, videojuegos y páginas web personalizadas. Videojuegos y aplicaciones a medida para eventos empresariales."/>
    </Helmet>
    <div className='nosotros-container'>
        <section className='title'>
            <h1>¿Quienes somos?</h1>
            <p>Somos un equipo de desarrolladores con una trayectoria de más de 7 años, especializados en la creación de aplicaciones y videojuegos web multiplataforma. A lo largo del trayecto, hemos concebido y desarrollado una amplia gama de proyectos innovadores, adaptándonos a las necesidades específicas del cliente.</p>
        </section>

        <section className='ventajas'>
            <div className="background">
                <h2>¿Porqué elegirnos?</h2>
                <div className="iconos-container">
                    <div className='icono'>
                        <BsCalendarCheckFill/>
                        <p>+7 años de experiencia</p>
                    </div>
                    <div className='icono'>
                        <BsPeopleFill/>
                        <p>Equipo de expertos</p>
                    </div>
                    <div className='icono'>
                        <BsTools/>
                        <p>Asistencia pre y post venta</p>
                    </div>
                    <div className='icono'>
                        <BsLightbulbFill/>
                        <p>Ideas innovadoras</p>
                    </div>
                    <div className='icono'>
                        <BsPencilSquare/>
                        <p>100% personalizables</p>
                    </div>
                    <div className='icono'>
                        <BsDatabaseFill/>
                        <p>Bases de datos</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='eventos' id='eventos'>
            <h2>Proyectos y eventos</h2>
            <Carousel>
                <img src={DefaultImage} alt="" />
                <img src={DefaultImage} alt="" />
                <img src={DefaultImage} alt="" />
                <img src={DefaultImage} alt="" />
                <img src={DefaultImage} alt="" />
            </Carousel>
        </section>
    </div>
    </>
  )
}

export default Nosotros