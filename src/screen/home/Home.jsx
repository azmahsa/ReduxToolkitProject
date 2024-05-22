import { Caption, Title } from "../../components/common/CustomComponents";
import { ProductSlideCart } from "../../components/product/ProductSlide";
import {
  Hero,
  ShippingInfo,
  Product,
  Banner,
  ProductSlide,
  Testimonials,
  InstagramPost,
} from "../../router";
export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />

      <div className=" container my-16 slideproduct">
        <Title level={4}>Recent Product</Title>
        <Caption>SISCOVER THE MOST TRENDING PRODUCTS IN MOONCART.</Caption>
        <br />
        <ProductSlideCart />
      </div>

      <InstagramPost />
    </>
  );
};
