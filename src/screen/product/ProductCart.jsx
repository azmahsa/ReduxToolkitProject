import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCart, IoClose } from "react-icons/io5";
import {
  FaFacebook,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../../components/common/CustomComponents";
import { AiFillInstagram } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CartAction } from "../../redux/slices/cartSlice";
import { favoriteActions } from "../../redux/slices/favouriteSlice";

export const RenderRatingsStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hashalfStars = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hashalfStars && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }
  return stars;
};
export const ProductCart = ({
  id,
  key,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const modalOpen = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const discountPrice = price[0].value - (price[0].value * discount) / 100;

  const addToCart = () => {
    dispatch(CartAction.addToCart({ id, title, price: discountPrice, images }));
  };

  const handelAddTofavorite = () => {
    dispatch(
      favoriteActions.addToFavorites({
        id,
        title,
        price: discountPrice,
        images,
      })
    );
  };

  return (
    <div>
      <div className="product card ">
        <div className="images h-96 rounded-t-xl">
          {images.map((cover, index) => {
            return (
              <img
                key={index}
                src={cover?.image}
                className="w-full h-full object-cover"
                alt={title}
              />
            );
          })}
          <div className=" flex  justify-between w-full p-5 absolute top-0 left-0">
            {discount && <button className=" discount-btn rounded-xl">{discount}%</button>}
            {featured && (
              <button className=" feature-btn rounded-xl">
                {featured === true && "featured"}
              </button>
            )}
          </div>
          <div className=" overlay flex items-center justify-center gap-2 absolute bottom-0 left-0 right-0 m-5  ">
            <button
              onClick={modalOpen}
              className="quick-view-btn product-btn primary-btn "
            >
              Quick view
            </button>
            <button
              onClick={addToCart}
              className="add-to-cart-btn product-btn primary-btn "
            >
              <IoCart size={23} />
            </button>
            <button onClick={handelAddTofavorite} className="love-btn product-btn primary-btn ">
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-white rounded-b-xl pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-2 -mt-2 mb-2">
            {RenderRatingsStars(rating)}
          </div>
          <div className="flex items-center gap-3">
            {price.slice(0, 1).map((priceItem, index) => {
              return (
                <>
                  <BodyOne className="line-through" key={index}>
                    ${priceItem.value}
                  </BodyOne>
                  <BodyOne className="text-primary-green">
                    $
                    {(
                      priceItem.value -
                      (priceItem.value * discount) / 100
                    ).toFixed(2)}
                  </BodyOne>
                </>
              );
            })}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div onClick={modalClose} className="overlay-bg">
            <div className="modal-overlay" onClick={modalClose}>
              <div
                className=" modal-content flex justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-1/2 h-[500px] overflow-hidden">
                  {images.map((cover, index) => {
                    return (
                      <img
                        key={index}
                        src={cover.image}
                        className="modal-image w-full h-full object-cover"
                        alt={title}
                      />
                    );
                  })}
                </div>
                <div className="modal-detail w-1/2 h-[500px] overflow-y-scroll p-9 ">
                  <button className=" feature-btn bg-indigo-500">
                    SALE {discount}% OFF
                  </button>
                  <Title level={2}>{title}</Title>
                  <div className=" flex items-center gap-1 -mt-2">
                    {RenderRatingsStars(rating)}
                  </div>
                  {price.slice(0, 1).map((priceItem, index) => {
                    return (
                      <div className=" flex items-center gap-3" key={index}>
                        <BodyOne className="line-through mt-4">
                          ${priceItem.value}
                        </BodyOne>
                        <Title level={3} className="text-primary-green">
                          $
                          {(
                            priceItem.value -
                            (priceItem.value * discount) / 100
                          ).toFixed(2)}
                        </Title>
                      </div>
                    );
                  })}
                  <BodyOne className=" text-sm leading-6">
                    {description}
                  </BodyOne>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value="1"
                      className="w-12 h-12 text-primary outline-none border-2 border-primary px-4 "
                    />
                    <button className=" primary-btn">ADD TO CART</button>
                  </div>
                  <hr className="my-5" />
                  <div className=" flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Category :
                        <sapn className=" font-normal">Wooden Product</sapn>
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Tag :<sapn className=" font-normal">Wooden</sapn>
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Share :
                      </Title>
                      <div className=" flex items-center -mt-1 gap-3">
                        <FaFacebook />
                        <AiFillInstagram />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                  <button
                    className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white"
                    onClick={modalClose}
                  >
                    <IoClose size={32} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
