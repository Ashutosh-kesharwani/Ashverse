import { useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} navbar-glass w-full fixed top-0 z-20 py-5`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <h1
            className="
              text-2xl
              font-black
              tracking-wide
              blue-text-gradient
              transition-all
              duration-300
              hover:scale-105
            "
          >
            AshVerse
          </h1>
        </Link>

        {/* Desktop Navigation */}

        <ul className="hidden md2:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`
                text-[18px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                ${active === link.title ? "text-white-100" : "text-secondary"}
                hover:text-accent-2
              `}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile */}

        <div className="flex flex-1 items-center justify-end md2:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              ${toggle ? "flex" : "hidden"}
              absolute
              top-20
              right-0
              mx-4
              min-w-[170px]
              rounded-2xl
              p-6
              black-gradient
              shadow-card
            `}
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                    text-[16px]
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-300
                    ${
                      active === link.title
                        ? "text-white-100"
                        : "text-secondary"
                    }
                    hover:text-accent-2
                  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
