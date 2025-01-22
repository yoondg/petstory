import React from 'react'
import Title from './Title'
import '../styles/components/BrandOnTV.css'

const BrandOnTV = () => {
  return (
    <section className='brand-on-tv'>
      <div className='content-container inner'>
        {/* 동영상 아이프레임 */}
        <div className='video-wrapper'>
          <iframe width="758" height="427" src="https://www.youtube.com/embed/Qq0ayRUtNGk" title="the deep sea" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {/* 텍스트 버튼 */}
        <div className='text-wrapper'>
          <Title title="영양만점 수제간식" subTitle="좋은 성분과 기능과 합리적인 가격"/>
          <button className='brand-button'>MORE</button>
        </div>
      </div>
    </section>
  )
}

export default BrandOnTV