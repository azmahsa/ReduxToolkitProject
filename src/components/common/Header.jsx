import React, { useState, useRef, useEffect } from "react";
import LogoImage from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomLink, CustomNavLink } from "./CustomComponents";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModelCart } from "../cart/ModelCart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //* close menu if click outside close meno botton
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  //*handel scroll whith animation
  const handelScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", handelScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  //* we only want to show that black box in home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={
          isHomePage
            ? `header  px-12 py-3 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-12 py-3  relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${
              isScrolled ? " lg:bg-none" : " lg:bg-black"
            } lg:h-[88px] lg:absolute  lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}

        <nav className="p-4 flex justify-between items-center w-full relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={LogoImage} alt="LogoImg" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8 ">
              {menulists.map((list) => {
                return (
                  <li key={list.id} className=" uppercase list-none">
                    <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                  </li>
                );
              })}
            </div>
          </div>
          <div className=" flex items-center gap-8 icons ">
            <div className=" uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Login
              </CustomLink>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                /
              </span>
              <CustomLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Register
              </CustomLink>
            </div>
            <div
              className={`icons flex items-center justify-center  gap-6  ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              <IoSearchOutline size={23} />

              <ModelCart />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 rounded-xl h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>
          {/*responsive menu if below 768px*/}
          <div
            className={`lg:hidden  w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
            }`}
          >
            {menulists.map((list) => {
              return (
                <li key={list.id} className=" uppercase list-none">
                  <CustomNavLink href={list.path} className="text-white">
                    {list.link}
                  </CustomNavLink>
                </li>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
