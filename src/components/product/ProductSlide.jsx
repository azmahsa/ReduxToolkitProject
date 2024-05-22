import Slider from "react-slick";
import { BodyOne, Title } from "../common/CustomComponents";
import { productlists } from "../../assets/data/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCart } from "../../router";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[32%] -right-5 lg:-right-32 rounded-full slider-btn "
      onClick={onClick}
    >
      <button>
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[32%] -left-5 lg:-left-32 rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button>
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const ProductSlide = () => {
  return (
    <>
      <section className="py-20 bg-white slideproduct">
        <div className=" container">
          <Title level={4}>What is trading now</Title>
          <div className=" flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">
              discover the most trending products in mooncart
            </BodyOne>
          </div>
          <ProductSlideCart />
        </div>
      </section>
    </>
  );
};

export const ProductSlideCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          intialslide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {productlists.map((item, id) => {
          return (
            <ProductCart
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.images}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
              featured={item.featured}
              category={item.category}
              color={item.color}
            />
          );
        })}
      </Slider>
    </>
  );
};
