import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { Badges, BodyOne, Title } from "../common/CustomComponents";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CartAction,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slices/cartSlice";
import { CkeckoutForm } from "./CkeckoutForm";
import {
  favoriteActions,
  selectTotalFavorites,
} from "../../redux/slices/favouriteSlice";

export const ModelCart = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);
  const totalFav = useSelector(selectTotalFavorites);
  const favItem = useSelector((state) => state.favorites.favoritesItemList);
  const [isOpen, setIsopen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setAdctiveTab] = useState("cart");

  const openModal = () => {
    setIsopen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setIsopen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setAdctiveTab(tab);
  };

  const handelPaymentSuccess = () => {
    console.log("**************************");
    console.log("Payment Success");
    console.log("**************************");
  };
  return (
    <>
      <button className=" relative z-20" onClick={openModal}>
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <span>
            <Badges color="bg-primary-green">{totalFav}</Badges>
          </span>
        </div>
      </button>
      <button className=" relative z-20 " onClick={openModal}>
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <span>
            <Badges color="bg-primary-green">{totalQuantity}</Badges>
          </span>
        </div>
      </button>
      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModel}></div>
          <div
            className={`cartmodel p-16 text-primary ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className=" flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? " text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary ">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? " text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary ">
                  {totalFav}
                </span>
              </button>
            </div>
            <div className="line-container ">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab == "cart" ? (
              <>
                {cartItem.map((item) => {
                  return (
                    <CartProduct
                      key={item.id}
                      id={item.id}
                      cover={item.cover}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  );
                })}

                <div className="total flex items-center justify-between mt-10 ">
                  <Title level={6}>SubTotal:</Title>
                  <Title level={6}>{totalPrice.toFixed(2)}</Title>
                </div>
                <div>
                  <NavLink to="/cart">
                    <button className="primary-btn w-full">View Cart</button>
                  </NavLink>
                </div>
                <div className="checkout bg-white-100 mt-3">
                  <CkeckoutForm
                    total={totalPrice}
                    handelPaymentSuccess={handelPaymentSuccess}
                  />
                </div>
              </>
            ) : (
              <>
                {favItem.map((item) => {
                 return <FaveItemProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />;
                })}
                <NavLink to="/favourites">
                  <button className=" primary-btn w-full mt-8">
                    Check Your Favourite
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({ id, cover, name, price, quantity }) => {
  const dispach = useDispatch();

  const removeCartItem = () => {
    dispach(CartAction.removeAllFromCart(id));
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => {
              return (
                <img
                  src={images?.image}
                  alt=""
                  key={i}
                  className="w-full h-full object-cover"
                />
              );
            })}
          </div>
          <div className=" details w-1/2 ">
            <BodyOne>{name}</BodyOne>
            <p className=" test-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary ">
            <IoCloseOutline size={25} onClick={removeCartItem} />
          </button>
        </div>
      </div>
    </>
  );
};

export const FaveItemProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(favoriteActions.removeFromFavorites(id));
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0,1).map((image, i) => {
            return  <img
                key={i}
                src={image?.image}
                alt={i}
                className="w-full h-full object-cover"
              />;
            })}
          </div>
          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className=" text-primary-green">
              {quantity} ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={removeCartItem} />
          </button>
        </div>
      </div>
    </>
  );
};
