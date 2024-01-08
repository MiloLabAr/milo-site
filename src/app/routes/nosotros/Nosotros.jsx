import React from 'react'
import './Nosotros.scss'

import { BsCalendarCheckFill, BsPeopleFill, BsTools, BsLightbulbFill, BsPencilSquare, BsDatabaseFill  } from 'react-icons/bs';

function Nosotros() {
  return (
    <div className='nosotros-container'>
        <section className='title'>
            <h1>¿Quienes somos?</h1>
            <p>Somos un equipo apasionado de desarrolladores con una trayectoria de más de 7 años, especializados en la creación de aplicaciones y juegos web multiplataforma. A lo largo del trayecto, hemos concebido y desarrollado una amplia gama de proyectos innovadores, adaptándonos a las necesidades específicas del cliente.
                <br/><br/>Nuestra dedicación se refleja en la calidad y originalidad de cada uno de nuestros productos, diseñados para potenciar la visión y los objetivos de nuestros clientes. Nos distingue la pasión por la tecnología y la creatividad, elementos fundamentales que impulsan nuestra capacidad para superar desafíos y ofrecer soluciones únicas. Nuestra misión es transformar ideas en realidades digitales, llevando la innovación a cada rincón de la industria.</p>
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
            <div className="carrousel">
                
            </div>
        </section>
    </div>
  )
}

export default Nosotros