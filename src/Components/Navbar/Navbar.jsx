import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-70 fixed w-full">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-2 text-white">
        {/* Logo */}
        <div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147"
              height="50"
              color="#ffffff"
              viewBox="0 0 400.4 60.3"
              className="lg:m-[-20px] lg:ms-[-80px]"
            >
              <path
                fill="#fff"
                d="M396.7 18.4c-2 0-3.7 1.6-3.7 3.7 0 2.2 1.7 3.7 3.7 3.7s3.7-1.6 3.7-3.7c0-2.2-1.7-3.7-3.7-3.7zm0 6.8c-1.7 0-3-1.3-3-3.1s1.3-3.1 3-3.1 3 1.3 3 3.1-1.3 3.1-3 3.1z"
              ></path>
              <path
                fill="#fff"
                d="M398.5 21.5c0-.9-.6-1.4-1.4-1.4h-1.8V24h1.1v-1.2h.3l.8 1.2h1.2l-.9-1.4c.4-.1.7-.5.7-1.1zm-1.6.4h-.6V21h.6c.3 0 .5.2.5.4 0 .4-.2.5-.5.5zm-103.5-7.7h-28.5v2.6h12.7v32.4h2.9V16.8h12.9zm7.4 9.1c-6.7 0-10.9 5.6-10.9 13.4 0 7.9 4.7 12.9 11.8 12.9 3 0 5.5-.7 7.4-2.2v-2.7c-2.2 1.8-4.3 2.5-7.1 2.5-5.2 0-9.2-3.6-9.2-10.4H311v-1c-.2-7.4-3.6-12.5-10.2-12.5zm-8 11.1c.7-5.5 3.9-8.6 8-8.6 5 0 7.1 4.1 7.3 8.6h-15.3zM315 12.1h2.9v37.1H315zm18.1 11.2c-6.7 0-10.9 5.6-10.9 13.4 0 7.9 4.7 12.9 11.8 12.9 3 0 5.5-.7 7.4-2.2v-2.7c-2.2 1.8-4.3 2.5-7.1 2.5-5.2 0-9.2-3.6-9.2-10.4h18.2v-1c-.1-7.4-3.6-12.5-10.2-12.5zm-8 11.1c.7-5.5 3.9-8.6 8-8.6 5 0 7.1 4.1 7.3 8.6h-15.3zm25-6.5v-4h-2.9v25.3h2.9V31.5c1.2-3.2 3.6-5.5 6.7-5.5.9 0 1.7.2 2.3.5v-2.8c-.6-.2-1.3-.3-2.2-.3-3.1-.1-5.7 2-6.8 4.5zm12.1-4h2.8v25.3h-2.8zm1.5-9.7c-1.1 0-1.9.9-1.9 1.9 0 1.1.9 1.9 1.9 1.9s1.9-.9 1.9-1.9-.8-1.9-1.9-1.9zm26.5 9.7h-3.7l-12.8 11V12.1h-2.9v37.1h2.9v-13l13.2 13h3.5l-13.8-13.8z"
              ></path>
              <path
                fill="#5ce500"
                d="M11.2 14.9L0 21.3l17.4 10.1v20.1l11.2-6.4c.5-.3.9-1 .9-1.6V24.4L13 14.9c-.5-.3-1.3-.3-1.8 0z"
              ></path>
              <path
                fill="#5ce500"
                d="M12.1 48.4V34.5L0 41.5zM25 .2c-.5-.3-1.3-.3-1.8 0L10.7 7.4l24.1 13.9v27.9L47.3 42c.5-.3.9-1 .9-1.6V13.6L25 .2z"
              ></path>
              <path
                fill="#fff"
                d="M117.9 22.5c-4.3 0-7.7 1.6-9.8 4.7-2.3 3.2-2.6 7-2.6 9 0 8.3 4.9 13.6 12.5 13.6 9.2 0 12.5-7.4 12.5-13.8 0-3.7-1.1-7-3.1-9.4-2.3-2.7-5.6-4.1-9.5-4.1zm0 22.4c-4.2 0-6.9-3.4-6.9-8.8 0-5.5 2.6-8.9 6.9-8.9 4.2 0 6.9 3.4 6.9 8.8 0 5.5-2.7 8.9-6.9 8.9zM74.8 13.6H61.7v35.6h5.8v-14h7.4c8 0 12.4-3.9 12.4-11-.1-3.1-1.3-10.6-12.5-10.6zM74.1 30h-6.6V18.9h7.4c4.3 0 6.4 1.8 6.4 5.5 0 4-2.1 5.6-7.2 5.6zm26.6-7.3c-2.2.3-3.9 1.4-5.2 3.5V23h-5.1v26.1h5.4V37.9c0-5.2.4-9.6 5.9-9.6.6 0 1.1.1 1.7.3l.7.2 1-5.3-.4-.2c-1.2-.5-2.6-.7-4-.6zm145 12.1c-1.3-.5-4-1.2-6.1-1.7-1-.3-1.9-.5-2.5-.7-2-.6-3-1.4-3-2.6 0-2.5 3.5-2.8 5-2.8 1.8 0 4.8.5 5.3 3.5l.1.4h5.2v-.5c-.4-5.3-4-7.8-10.8-7.8-5.1 0-10.2 2.4-10.2 7.6 0 2.8 1.9 5.2 5.2 6.3 1.3.5 3.5 1.1 5.6 1.7 1.2.3 2.4.7 3.3.9 1.6.5 2.4 1.4 2.4 2.6 0 2.4-2.9 3.3-5.6 3.3-2.5 0-5.5-.7-6.2-3.9l-.1-.4h-5.2l.1.6c.5 5.4 4.6 8.3 11.4 8.3 7.7 0 11.2-4.2 11.2-8.4-.1-3-1.8-5.2-5.1-6.4zm-94-9.6c-1.7-1.8-4.1-2.7-7-2.7-7.9 0-11.5 7-11.5 13.5 0 6.6 3.6 13.4 11.5 13.4 2.7 0 5-1 6.7-2.7 0 1.2 0 2.3-.1 2.7-.3 4.3-2.4 6.3-6.5 6.3-2.3 0-4.9-.8-5.4-3.1l-.1-.5H134l.1.7c.6 4.6 4.6 7.5 10.6 7.5 5.2 0 8.9-2 10.8-5.7.9-1.8 1.3-4.4 1.3-7.8V23.1h-5.1v2.1zm-6.6 19.3c-1.9 0-6.3-.9-6.3-8.8 0-5.2 2.5-8.4 6.4-8.4 3.1 0 6.3 2.2 6.3 8.4.1 5.5-2.3 8.8-6.4 8.8zm75.6-9.7c-1.3-.5-4-1.2-6.1-1.7-1-.3-1.9-.5-2.5-.7-2-.6-3-1.4-3-2.6 0-2.5 3.5-2.8 5-2.8 1.8 0 4.8.5 5.3 3.5l.1.4h5.2v-.5c-.4-5.3-4-7.8-10.8-7.8-5.1 0-10.2 2.4-10.2 7.6 0 2.8 1.9 5.2 5.2 6.3 1.3.5 3.5 1.1 5.6 1.7 1.2.3 2.4.7 3.3.9 1.6.5 2.4 1.4 2.4 2.6 0 2.4-2.9 3.3-5.6 3.3-2.5 0-5.5-.7-6.2-3.9l-.1-.4h-5.2l.1.6c.5 5.4 4.6 8.3 11.4 8.3 7.7 0 11.2-4.2 11.2-8.4 0-3-1.7-5.2-5.1-6.4zm-19.9 0c-.3-7.3-5-12.2-11.9-12.2-4 0-7.3 1.6-9.5 4.5-1.8 2.4-2.8 5.7-2.8 9.1 0 8.1 5 13.5 12.5 13.5 5.8 0 9.8-2.9 11.2-8.3l.2-.6h-5.4l-.1.3c-1.1 3.2-3.8 3.9-5.9 3.9-4.1 0-6.7-2.7-7-7.1h18.5l.1-.5c.1-.6.1-1.5.1-2.1v-.5zm-18.4-1.6c.5-3.6 2.9-5.9 6.5-5.9 2.7 0 5.9 1.6 6.3 5.9h-12.8zm-10.5-10.5c-2.2.3-3.9 1.4-5.2 3.5V23h-5.1v26.1h5.4V37.9c0-5.2.4-9.6 5.9-9.6.6 0 1.1.1 1.7.3l.7.2 1-5.3-.4-.2c-1.2-.5-2.6-.7-4-.6zm84.8-1.2c0-.9-.6-1.4-1.4-1.4h-1.8V24h1.1v-1.2h.3l.8 1.2h1.2l-.9-1.4c.4-.1.7-.5.7-1.1zm-1.5.4h-.6V21h.6c.3 0 .5.2.5.4 0 .4-.2.5-.5.5z"
              ></path>
              <path
                fill="#fff"
                d="M255 18.4c-2 0-3.7 1.6-3.7 3.7 0 2.2 1.7 3.7 3.7 3.7s3.7-1.6 3.7-3.7c0-2.2-1.7-3.7-3.7-3.7zm0 6.8c-1.7 0-3-1.3-3-3.1s1.3-3.1 3-3.1 3 1.3 3 3.1-1.4 3.1-3 3.1z"
              ></path>
            </svg>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8">
          {/* Product Section */}
          <div className="relative group">
            <button className="flex items-center py-2 px-3 text-white  hover:text-gray-200">
              PRODUCTS
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 top-[80%] mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg">
              <ul className="text-sm text-black p-2">
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-200"
                  >
                    <div className="font-semibold">Online Stores</div>
                    <span className="text-xs text-gray-500">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-200"
                  >
                    <div className="font-semibold">Segmentation</div>
                    <span className="text-xs text-gray-500">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-200"
                  >
                    <div className="font-semibold">Marketing CRM</div>
                    <span className="text-xs text-gray-500">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Other Sections */}
          <ul className="flex space-x-8 py-2">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                ENTERPRISE
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                FREE TRIALS
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                PRICING
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                SUPPORT & LEARNING
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                ABOUT US
              </a>
            </li>
          </ul>

          {/* search logo  */}
          <span className="py-3 p-0 cursor-pointer">
            <svg
              fill="#fff"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488.4 488.4"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
                  />
                </g>
              </g>
            </svg>
          </span>

          {/* Account Section */}
          <div className="flex space-x-4">
            <button className="text-white hover:bg-gray-500 p-2 rounded-md">
              Your Account
            </button>
            <button className="text-white hover:bg-gray-500 p-2 rounded-md">
              Telerik Platform
            </button>
          </div>
        </div>

        {/* Mobile section started ------------------------ */}

        {/* Product Section */}
        <div className="relative group inline-flex items-center w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden mx-7">
          <button className="flex items-center py-2 px-3 text-white hover:text-gray-200">
            PRODUCTS
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white rounded-lg shadow-lg">
            <ul className="text-sm text-black p-2">
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-xs text-gray-500">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-xs text-gray-500">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-xs text-gray-500">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* search logo  */}
        <span className="py-2 inline-flex items-center w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden cursor-pointer ">
          <svg
            fill="#fff"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
                />
              </g>
            </g>
          </svg>
        </span>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mega-menu-full"
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out fixed top-[4.2rem] right-0 w-64 h-full bg-white md:hidden border-l border-gray-300`}
      >
        <ul className="flex flex-col p-4 mt-4 space-y-4">
          <li>
            <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">
              ENTERPRISE
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">
              FREE TRIALS
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">
              PRICING
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">
              SUPPORT & LEARNING
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">
              ABOUT US
            </a>
          </li>
        </ul>

        <div className="flex flex-col p-4 border-t border-gray-300">
          <button className="text-black hover:bg-gray-200 p-2 rounded">
            Your Account
          </button>
          <button className="text-black hover:bg-gray-200 p-2 rounded">
            Telerik Platform
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
