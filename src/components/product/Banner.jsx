import { promotionalInfo } from "../../assets/data/data";
import { BodyOne, Title } from "../common/CustomComponents";
export const Banner = () => {
  return (
    <>
      <section className=" flex flex-col lg:flex-row items-center justify-between pt-20">
        {promotionalInfo.map((item) => {
          return (
            <>
              <div className="box relative w-full" key={item.id}>
                <div className="w-full h-full">
                  <img
                    className="w-full  h-[50vh] object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="  top-0 absolute  left-0 p-3 md:p-8 lg:w-2/3 ">
                  <span className="bg-white rounded-xl px-6 py-2 text-sm">
                    {item.title}
                  </span>
                  <Title level={2} className="my-5">
                    {item.title}
                  </Title>
                  <BodyOne level={2} className="my-5 text-justify w-[80%]">
                    {item.description}
                  </BodyOne>
                  <button className="secondary-btn">Shop Now</button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
