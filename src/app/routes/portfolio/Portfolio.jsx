import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Portfolio.scss'
import data from '../../../assets/data.json'

function Portfolio() {
    const imgRoute = '/assets/img/products/';

    const appsData = data.filter(page => page.type.includes('app'));
    const gamesData = data.filter(page => page.type.includes('game'));

  return (
    <div className='portfolio-container'>
        <section className='title'>
            <h1>Nuestro portfolio de plantillas</h1>
            <p>En nuestro portfolio podras ver aplicaciones y videojuegos ya creados por nosotros, los cuales pueden ser utilizados como plantilla ademas de contar con la posibilidad de personalizarlos a tu gusto.</p>
        </section>

        <section className='category bestselling-portfolio'>
            <div className='top-container'>
                <h2 className='best-seller'>Nuestros más vendidos  ★</h2>
            </div>
            <div className='products'>
                <ProductCard
                    title='Word Connect'
                    description='Quiz interactivo que consiste en unir letras para formar la palabra correcta'
                    badges={['Touch', 'Quiz', 'Personalizable', 'Juego']}
                    vertical
                    id='wordconnect'
                >
                    <img src='./assets/products/wordlink.png' alt='Wordconnect' />
                </ProductCard>
                <ProductCard
                    title='Sopa de letras'
                    description='Clasico juego de sopa de letras'
                    badges={['Touch', 'Personalizable', 'Juego']}
                    vertical
                    id='sopadeletras'
                >
                    <img src='./assets/products/wordsearch.png' alt='Wordsearch' />
                </ProductCard>
                <ProductCard
                    title='Formulario'
                    description='Formulario personalizado para la toma de datos de clientes'
                    badges={['Aplicación', 'Personalizable', 'Base de datos']}
                    id='formulario'
                >
                    <img src='./assets/products/form.png' alt='Form' />
                </ProductCard>
            </div>
        </section>
        <section className='category games-portfolio'>
            <div className='top-container'>
                <h2>Juegos</h2>
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
                <h2>Aplicaciones</h2>
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
  )
}

export default Portfolio