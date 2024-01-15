import DefaultImage from '../../assets/default.jpg'

import './Carousel.scss'
import { useState } from 'react';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


function CarouselComponent({ children }) {
    
    const [order, setOrder] = useState(0);

    const imgs = children.length < 5 ? [...children, ...children] : children;

    const prevfadeIn = {
        right: '90%',
        transform: 'rotate3d(0,1,0,90deg)',
        scale: '0.8',
        opacity: 0,
        zIndex: 0
    }
    const left = {
        right: '50%',
        transform: 'rotate3d(0,1,0,0deg)',
        scale: '0.8',
        opacity: 0.8,
        zIndex: 1
    }
    const center = {
        right: 0,
        transform: 'rotate3d(0,1,0,0deg)',
        scale: '1',
        opacity: 1,
        zIndex: 2,
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)'
    }
    const right = {
        right: '-50%',
        transform: 'rotate3d(0,1,0,0deg)',
        scale: '0.8',
        opacity: 0.8,
        zIndex: 0
    }
    const fadeOut = {
        right: '-90%',
        transform: 'rotate3d(0,1,0,-90deg)',
        scale: '0.8',
        opacity: 0,
        zIndex: 0
    }

    const getStyle = (order, index, length=imgs.length) => {
        if(order === 0 && index === length-1) return right;
        if(order === 1 && index === length-1) return fadeOut;
        if(order === 0 && index === length-2) return fadeOut;  
        if(order === index) return center;
        if(order === index+1) return right;
        if(order === index+2) return fadeOut;
        if(order === index-1) return left;
        if(order === index-2) return prevfadeIn;
        if(order === length+index) return center;
        if(order === length+index+1) return right;
        if(order === length+index+2) return fadeOut;
        if(order === length+index-1) return left;
        if(order === length+index-2) return prevfadeIn;
    }

    const next = () => setOrder(order >= imgs.length-1 ? 0 : order + 1);
    const prev = () => setOrder(order === 0 ? imgs.length-1 : order - 1);

    return (
        <div className='carousel'>
            <button className='left' onClick={prev}>
                <AiFillCaretLeft />
            </button>
            <button className='right' onClick={next}>
                <AiFillCaretRight />
            </button>
            <div className='carousel-container'>
                {
                    imgs.map((img, index) => (
                        <div key={index} style={getStyle(order, index)}>
                            {img}
                        </div>        
                    ))
                }
            </div>          
        </div>
    )
}

export default CarouselComponent;