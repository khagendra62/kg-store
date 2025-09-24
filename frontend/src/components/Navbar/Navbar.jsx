import { ShoppingCart, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 sticky top-0 z-100">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-white">
          <div className="flex justify-between items-center h-15 md:h-18 lg:h-20 ">
            <div className="flex-shrink-0">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                <a href="#">KG STORE</a>
              </div>
            </div>

            <div className="hidden lg:block">
              <ul className="flex gap-x-8">
                {["Home", "About us", "Products", "Contact us"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:scale-155 relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-10 items-center">
              <div>
                <button className=" text-gray-300 hover:text-cyan-400 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs h-5 w-5 flex justify-center items-center animate-pulse rounded-full">
                    7
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <button className="px-4 py-2 rounded-lg border border-gray-600 flex items-center  transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-cyan-400 outline-0">
                  <User size={18} />
                  <span className="font-medium">Login</span>
                </button>

                <button
                  className="px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-cyan-500 to-purple-500 
                hover:from-cyan-400 hover:to-purple-400 text-white transition-all duration-300 hover:scale-105 "
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
