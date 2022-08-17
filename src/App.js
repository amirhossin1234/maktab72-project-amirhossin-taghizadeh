import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from './components/Header/Header';
import Home from './pages/home';
import Detail from './pages/detail';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://persiakhodro.ir/Uploads/Web/SBU/Buy/PersiaKhodro-Buy-BMW-at-Cutomer-Place-Website-Banner.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://persiakhodro.ir/Uploads/Web/Persia-Khodro_BMWLAND_Website_Banner.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://persiakhodro.ir/Uploads/Web/LandingPages/Banner_TrainUp_persiakhodro.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://persiakhodro.ir/Content/site/plugins/perfect-bmw/images/perfecter-1.jpg"/></SwiperSlide>
      </Swiper>

      <h1 className=' text-3xl mr-[44%] mt-10'>محصولات جدید </h1>

      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Detail/:id'>
          <Detail />
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
