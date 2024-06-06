import { BodyOne, Title } from "../common/CustomComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 right-0 bg-white text-primary rounded-full slider-btn "
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
      className="absolute bottom-0  right-20 bg-white text-primary rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button>
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="testimonials container p-10">
        <div className="  h-full flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:justify-center justify-start  ">
          <div className="w-1/2  flex relative z-50 lg:mt-28 mt-0 ">
            <div className="box hidden lg:flex w-80 h-80 bg-white rounded-full z-50">
              <img
                src="../images/hero/girl.png"
                alt=""
                className=" absolute -top-[200px] left-[-22px] z-10 rounded-b-full "
              />
            </div>
            <div className="hidden lg:flex bg-[rgba(255,255,255,0.5)] absolute top-36 px-5 backdrop-blur-sm p-3 rounded-lg right-40 z-50 ">
              <BodyOne className="leading-none ">Our Satisfied User</BodyOne>
              <div className=" flex items-center">
                <img
                  src="../images/testimonial/pic1-2.png"
                  className="w-14 h-14 object-cover rounded-full border-2 border-gray-100  "
                  alt=""
                />
                <img
                  src="../images/testimonial/pic2-2.png"
                  className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100  "
                  alt=""
                />
                <span className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center justify-center  ">
                  +12K
                </span>
              </div>
            </div>
          </div>
          <div className="left lg:w-1/2 lg:text-left w-[95%] text-center relative z-50 ">
            <Title level={2}>what our clients say about us</Title>
            <BodyOne className="mb-4 lg:mb-8">
              It is long established fact that a reader will be distracted by
              the reazabl content of a page when looking at its layout. The
              point of using lorem ipusm is that it has a more-or-less normal
              distrabution of letters.
            </BodyOne>
            <Slider {...settings}>
              <TestimonialsCard
                name="Kenneth Fong"
                post="Undergraduate Student"
                cover="../images/testimonial/pic5.jpg"
              />
              <TestimonialsCard
                name="Joe Do"
                post="Postgraduate Student"
                cover="../public/images/testimonial/pic6.jpg"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export const TestimonialsCard = ({ cover, name,post }) => {
  return (
    <>
      <div className="flex items-center gap8 ">
        <div className="w-20 h-20">
          <img
            src={cover}
            className="w-full h-full object-cover rounded-full "
            alt=""
          />
        </div>
        <div className="details ml-2">
          <Title className=" font-medium leading-none">{name}</Title>
          <p className="text-primary">{post}</p>
        </div>
      </div>
    </>
  );
};
