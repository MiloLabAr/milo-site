import React from 'react'
import { Helmet } from 'react-helmet-async';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Portfolio.scss'
import data from '../../../assets/data.json'

function Portfolio() {
    const imgRoute = '/assets/img/products/';

    const appsData = data.filter(page => page.type.includes('app'));
    const gamesData = data.filter(page => page.type.includes('game'));

  return (
    <>
    <Helmet>
        <title>Portfolio de trabajos | Plantillas para usar</title>
        <meta name="description" content="En nuestro portfolio podras ver aplicaciones y videojuegos ya creados por nosotros los cuales pueden ser utilizados como plantilla. Tambien contas con la posibilidad de personalizarlos a tu gusto."/>
    </Helmet>
    <div className='portfolio-container'>
        <section className='title'>
            <h1>Nuestro portfolio de plantillas</h1>
            <p>En nuestro portfolio podras ver aplicaciones y videojuegos ya creados por nosotros los cuales pueden ser utilizados como plantilla. Tambien contas con la posibilidad de personalizarlos a tu gusto.</p>
        </section>

        <section className='category bestselling-portfolio'>
            <div className='top-container'>
                <h2 className='best-seller'>Nuestros más vendidos  ★</h2>
            </div>
            <div className='products'>
                <ProductCard
                    title='Word Connect'
                    description='Quiz interactivo que consiste en unir letras para formar la palabra correcta'
                    badges={["Videojuego", "Touch", "Quiz", "Multiplataforma"]}
                    vertical
                    id='wordconnect'
                >
                    <img src='./assets/img/products/wordconnect/1.jpg' alt='Wordconnect' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clásico juego de sopa de letras donde deberas encontrar las palabras necesarias para ganar'
                    badges={["Videojuego", "Touch", "Quiz", "Multiplataforma"]}
                    vertical
                    id='sopadeletras'
                >
                    <img src='./assets/img/products/SopaDeLetras/1.png' alt='Wordsearch' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={["Aplicación", "Touch", "Toma de datos", "Base de datos"]}
                    id='formulario'
                >
                    <img src='./assets/img/products/Formulario/1.png' alt='Form' />
                </ProductCard>
            </div>
        </section>
        <section className='category games-portfolio'>
            <div className='top-container'>
                <h2 style={{fontSize: 30 + "px"}}>Videojuegos</h2>
            </div>
            <div className='products'>
                {gamesData.map(game => (
                    <ProductCard
                    title={game.title}
                    description={game.shortDescription}
                    badges={game.badges}
                    id={game.id}
                    vertical={game.vertical}>
                    <img src={imgRoute + game.images[0]} alt={game.title} />
                    </ProductCard>
                ))}
            </div>
        </section>
        <section className='category apps-portfolio'>
            <div className='top-container'>
                <h2 style={{fontSize: 30 + "px"}}>Aplicaciones</h2>
            </div>
            <div className='products'>
                {appsData.map(game => (
                    <ProductCard
                    title={game.title}
                    description={game.shortDescription}
                    badges={game.badges}
                    id={game.id}
                    vertical={game.vertical}>
                    <img src={imgRoute + game.images[0]} alt={game.title} />
                    </ProductCard>
                ))}
            </div>
        </section>
    </div>
    </>
  )
}

export default Portfolio