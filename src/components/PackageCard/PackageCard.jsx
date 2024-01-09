import React from 'react'
import './PackageCard.scss'

function PackageCard({img, title, description, buttonText, link, alt=''}) {
  return (
    <div className='card'>
        <div className='image-container'>
            <img src={img} alt={alt}/>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {console.log(buttonText)}
        {(buttonText !== undefined) ? <a href={link}>{buttonText}</a> : null}
    </div>
  )
}

export default PackageCard