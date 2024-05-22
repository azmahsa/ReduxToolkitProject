import React from "react";
import { BodyOne, Title } from "../../components/common/CustomComponents";
import { productlists } from "../../assets/data/data";
import { ProductCart } from "./ProductCart";


export const Product = () => {
  return (
    <>
      <section className="py-20 bg-white-100">
        <div className=" container">
          <Title level={4}>Most Popular Products</Title>
          <div className=" flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">All Products(39)</BodyOne>
            <BodyOne className="text-sm text-primary-green">
              wopden products(15)
            </BodyOne>
          </div>

          <div className=" content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
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
          </div>
        </div>
      </section>
    </>
  );
};
