import React from 'react';
import MainVisual from '../components/MainVisual';
import IntroSection from '../components/IntroSection';
import PopularProducts from '../components/PopularProducts';
import BrandOnTV from '../components/BrandOnTV';
import ParallaxBanner from '../components/ParallaxBanner';
import HygieneProducts from '../components/HygieneProducts';
import KeywordTabs from '../components/KeywordTabs';
import '../styles/pages/HomePage.css';

const HomePage = ({addToCart}) => {
  return (
    <div>
      <MainVisual /> 
      <IntroSection />
      <PopularProducts addToCart={addToCart}/>
      <BrandOnTV/>
      <ParallaxBanner/>
      <HygieneProducts addToCart={addToCart}/>
      <KeywordTabs addToCart={addToCart}/>
    </div>
  )
}

export default HomePage