import LogoImage from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponents";

export const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImage} alt="LogoImage" className="h-7" />
            <div className=" flex flex-col gap-2 mt-5">
              <Caption>Adress : 451 Wall Street, UK, London</Caption>
              <Caption>Email : example@domain.com</Caption>
              <Caption>Call : 555-555-1234</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-100 rounded-md outline-none"
              placeholder="Enter your email address ..."
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className=" flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Link</Title>
            <div className=" flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className=" flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
