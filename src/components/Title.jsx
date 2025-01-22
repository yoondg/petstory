import React from 'react'
import '../styles/components/Title.css';
const Title = ({title, subTitle}) => {
  return (
    <div className='section-title'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title