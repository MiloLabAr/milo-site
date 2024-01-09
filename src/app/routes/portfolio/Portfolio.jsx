import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Portfolio.scss'

function Portfolio() {
  return (
    <div className='portfolio-container'>
        <section className='title'>
            <h1>Nuestro portfolio de plantillas</h1>
            <p>En nuestro portfolio podras ver aplicaciones y juegos ya hechos por nosotros, los cuales pueden ser utilizados como plantilla ademas de contar con la posibilidad de personalizarlos a tu gusto y hasta combinarlos.</p>
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
                    <img src='./assets/products/wordlink.png' alt='Wordconnect' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clasico juego de sopa de letras'
                    badges={['Touch', 'Personalizable', 'Juego']}
                    vertical
                >
                    <img src='./assets/products/wordsearch.png' alt='Wordsearch' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={['Aplicación', 'Personalizable', 'Base de datos']}
                >
                    <img src='./assets/products/form.png' alt='Form' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={['Aplicación', 'Personalizable', 'Base de datos']}
                >
                    <img src='./assets/products/form.png' alt='Form' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clasico juego de sopa de letras'
                    badges={['Touch', 'Personalizable', 'Juego']}
                    vertical
                >
                    <img src='./assets/products/wordsearch.png' alt='Wordsearch' />
                </ProductCard>
            </div>
        </section>
    </div>
  )
}

export default Portfolio