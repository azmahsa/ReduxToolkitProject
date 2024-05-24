import { useDispatch, useSelector } from "react-redux";
import bgImage from "../assets/common/Frame.png";
import { CartAction, selectTotalPrice } from "../redux/slices/cartSlice";
import { BodyOne, Title } from "../components/common/CustomComponents";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const CartPage = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2 ">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <Title level={1}>Cart</Title>
          </div>
        </div>
        <div className=" container flex justify-between">
          <div className="w-2/3">
            <div className="relative  sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-5">
                      Thumbell
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-5"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem?.map((item) => {
                    return (
                      <CardPageCard
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/6 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart totals</p>
              <hr className="my-2 h-[20px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p>Enter your address to view shipping option.</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <button className="primary-btn mt-5 ">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CardPageCard = ({
  id,
  name,
  cover,
  quantity,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(CartAction.removeFromCart(id));
  };
  const removeCartItems = () => {
    dispatch(CartAction.removeAllFromCart(id));
  };
  const incCartItem = () => {
    dispatch(CartAction.addToCart({ id, name, price }));
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4 ">
          {cover?.slice(0, 1).map((image, i) => {
            return (
              <img
                key={i}
                src={image.image}
                alt={i}
                className="w-24 h-24 object-cover "
              />
            );
          })}
        </td>
        <td className="px-6 py-4">
          <BodyOne>{name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>{price}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className=" flex items-center gap-3">
            <button
              onClick={incCartItem}
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiPlus size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
            />
            <button
              onClick={removeCartItem}
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={removeCartItems}
            className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white"
          >
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};
