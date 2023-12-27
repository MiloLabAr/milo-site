import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Portfolio.scss'

import { AiFillDatabase } from 'react-icons/ai';
import { BsFillPencilFill, BsFillPeopleFill, BsCurrencyDollar } from 'react-icons/bs';

function Portfolio() {
  return (
    <>
        <section className='events-portfolio'>
            <div className='events-header'>
            <span>
                <BsFillPencilFill />
                100% personalizables
            </span>
            <span>
                <BsFillPeopleFill />
                Eventos corporativos
            </span>
            <span>
                <BsCurrencyDollar />
                Cotización en el momento
            </span>
            <span>
                <AiFillDatabase />
                Base de datos
            </span>
            </div>
            <div className='container'>
                <p>Recordá que todos los juegos y aplicaciones de nuestro catálogo son 100% personalizables. De requerir un juego o aplicación que no este listado en el catálogo, se puede cotizar sin problema mandandonos un mail o mismo desde el botón de “COTIZAR”.</p>
            </div>
        </section>

        <section className='bestselling-portfolio'>
            <div className='top-container'>
                <h1>Nuestros más vendidos  ★</h1>
            </div>
            <div className='products'>
                <ProductCard
                    title='Word Connect'
                    description='Quiz interactivo que consiste en unir letras para formar la palabra correcta'
                    badges={['Touch', 'Quiz', 'Personalizable', 'Juego']}
                    vertical
                >
                    <img src='./assets/img/wordlink.png' alt='Wordconnect' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clasico juego de sopa de letras'
                    badges={['Touch', 'Personalizable', 'Juego']}
                    vertical
                >
                    <img src='./assets/img/wordsearch.png' alt='Wordsearch' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={['Aplicación', 'Personalizable', 'Base de datos']}
                >
                    <img src='./assets/img/form.png' alt='Form' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={['Aplicación', 'Personalizable', 'Base de datos']}
                >
                    <img src='./assets/img/form.png' alt='Form' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clasico juego de sopa de letras'
                    badges={['Touch', 'Personalizable', 'Juego']}
                    vertical
                >
                    <img src='./assets/img/wordsearch.png' alt='Wordsearch' />
                </ProductCard>
            </div>
      </section>
    </>
  )
}

export default Portfolio