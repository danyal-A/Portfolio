import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img
          src={logo}
          alt=""
          className="rounded-full"
          width={"70px"}
          height={"70px"}
        />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navLinksdata) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navLinksdata._id}
            >
              <Link
                activeClass="active" 
                to={navLinksdata.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLinksdata.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
