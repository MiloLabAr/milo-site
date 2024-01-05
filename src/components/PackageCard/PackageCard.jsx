import React from 'react'
import { Link } from 'react-router-dom'
import './PackageCard.scss'

function PackageCard({img, title, description, buttonText, link}) {
  return (
    <div className='card'>
        <div className='image-container'>
            <img src={img} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>{buttonText}</a>
    </div>
  )
}

export default PackageCard