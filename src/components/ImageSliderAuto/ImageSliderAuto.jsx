import React from 'react'
import './ImageSliderAuto.scss'

function ImageSliderAuto({ children }) {
    const imgs = children.length < 5 ? [...children, ...children] : children;
  return (
    <div className='slider'>
        <div className="slide-track">
            {imgs.map((img, index) => img)}
        </div>
        <div className="slide-track">
            {imgs.map((img, index) => img)}
        </div>
        <div className="slide-track">
            {imgs.map((img, index) => img)}
        </div>
    </div>
  )
}

export default ImageSliderAuto