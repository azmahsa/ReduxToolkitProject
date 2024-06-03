import React, { useState } from "react";
import { herolist } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className=" h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1 ">
        <Slider {...settings}>
          {herolist.map((item) => {
            return (
              <HeroItem
                key={item.id}
                title={item.title}
                deccription={item.description}
                prices={item.price}
                colors={item.color}
                image={item.image}
              />
            );
          })}
        </Slider>
      </section>
      <Banner />
    </>
  );
};

export const HeroItem = ({ title, deccription, prices, colors, image }) => {
  const [selectColor, setSelectColor] = useState(colors[0].value);
  const [selectPrice, setSelectPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectPrice = prices.find((price) => price.color === color);
    setSelectColor(color);
    setSelectPrice(newSelectPrice);
  };

  return (
    <>
      <section className=" content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20 ">
        <div className="left w-1/2 p-8 lg:py-28">
          <Title
            level={3}
            className="leading-none font-normal md:text-3xl lg:text-[65px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{deccription}</BodyOne>
          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>Prices</Caption>
              <div className="mt-3">
                <Title level={5}>${selectPrice.value.toFixed(2)}</Title>
              </div>
            </div>
            <div>
              <Caption>Colors</Caption>
              <div className=" flex items-center justify-center gap-3 mt-5">
                {colors.map((color, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => handleColorClick(color.value)}
                      className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${
                        selectColor === color.value ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color.value }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <button className=" primary-btn uppercase ">view details</button>
            <button className=" secondary-btn uppercase">view shpo</button>
          </div>
        </div>
        <div className=" right mt-5 rounded-xl bg-white p-5 w-1/2 h-full flex justify-center items-center relative z-50 ">
          <img src={image} alt="" className="h-[60vh] w-full  object-contain" />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </>
  );
};

const Banner = () => {
  return (
    <>
      <div className=" py-20 container flex flex-col lg:flex-row items-center gap-5">
        <div>
          <BannerCart
            titel="Wooden Water Bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product1-1.png"
          />
        </div>
        <div className=" flex justify-between flex-col gap-8 ">
          <BannerCart
            titel="Wooden Water Bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product2.png"
            className={true}
          />
          <BannerCart
            titel="Wooden Water Bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product3.png"
            className={true}
            classSecond={true}
          />
        </div>
      </div>
    </>
  );
};

const BannerCart = ({ titel, desc, cover, className, classSecond }) => {
  return (
    <>
      <div className="w-full h-full relative ">
        <img src={cover} className=" rounded-xl" alt="" />
        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          } ${className && classSecond ? " left-0 lg:left-52 top-0 w-96" : ""}`}
        >
          <div>
            <Title className="text-[35px]" level={3}>
              {titel}
            </Title>
            <p className=" text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <button className="secondary-btn flex justify-end ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

HeroItem.propTypes = {
  title: PropTypes.isRequired,
  deccription: PropTypes.isRequired,
  prices: PropTypes.isRequired,
  colors: PropTypes.isRequired,
  image: PropTypes.isRequired,
};
