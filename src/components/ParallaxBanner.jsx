import React from "react";
import Title from "./Title";
import Button from "./Button";
import "../styles/components/ParallaxBanner.css"


const ParallaxBanner = () => {
  return (
    <section className='parallax-banner'>
      <div className='parallax-inner inner'>
        <Title 
        title="반려동물마다 필요로 하는 영양소는 다릅니다."
        subTitle="
        좋은 성분과 기능, 합리적인 가격으로 새로움과 기쁨까지 선물하고 싶습니다"/>
        <Button text="MORE"/>
      </div>
    </section>
  )
}

export default ParallaxBanner