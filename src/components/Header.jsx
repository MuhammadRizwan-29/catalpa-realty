import { Link } from "react-router-dom";
import { assets } from "./../assets/assets";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <header className="absolute w-full z-15">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 xl:px-0">
        <div>
          <Link to="/">
            <img src={assets.white_logo} alt="logo" className="max-w-45" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-4 font-works-sans text-white">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:underline">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/agents" className="hover:underline">
                Agents
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="block sm:hidden">
          <img
            src={assets.menu}
            className="w-10 h-10 object-cover cursor-pointer bg-white p-1 rounded-sm"
            onClick={handleMenu}
          />
          <div
            className={`w-full h-screen bg-white fixed top-0 right-0 p-4 z-50 transition-all duration-500 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <Link to="/">
                  <img src={assets.favicon} className="max-w-15" />
                </Link>
              </div>
              <img
                src={assets.menu_close}
                alt="close icon"
                className="w-6 h-6 cursor-pointer"
                onClick={handleCloseMenu}
              />
            </div>
            <div className="mt-10">
              <ul className="flex items-start flex-col gap-4 font-works-sans text-[#414042]">
                <li>
                  <Link
                    to="/"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/properties"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agents"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline hover:text-[#46237a]"
                    onClick={handleCloseMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
