import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 fixed w-full z-10 bg-white">
      <nav className=" lg:flex items-center justify-between max-conatiner">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`lg:flex lg:items-center absolute lg:static bg-white lg:z-auto z-[-1] w-full
         left-0 justify-center items-center gap-16 lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in lg:pb-0 pb-12 ${
           open ? "top-20" : "top-[-500px]"
         }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="lg:ml-8 lg:my-0 my-7">
              <a
                className="font-montserrat leading-normal text-slate-gray text-md hover:text-black "
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}

          <button className="bg-blue-700 text-white font-medium py-2 px-5 rounded-md">
            Cart
          </button>
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 top-6 lg:hidden cursor-pointer text-[35px]"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
