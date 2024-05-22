import React from "react";
import { productlists } from "../../assets/data/data";
import { ProductCart } from "../product/ProductCart";


export const Shop = () => {
  return (
    <>
      <section className=" container mt-36 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
      </section>
    </>
  );
};
