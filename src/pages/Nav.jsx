import React from 'react';

const Nav = () => {
      return (
            <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-4">
                  <div className="relative flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg border border-white border-opacity-20">
                        {/* Left Section: Logo/Title */}
                        <div className="flex items-center space-x-8">
                              <a href="#" className="text-white text-xl font-bold">The Future of Banking</a>
                              <ul className="hidden md:flex space-x-6">
                                    <li><a href="#" className="text-gray-200 hover:text-white flex items-center">Features <span className="ml-1">&#9662;</span></a></li>
                                    <li><a href="#" className="text-gray-200 hover:text-white flex items-center">Products <span className="ml-1">&#9662;</span></a></li>
                                    <li><a href="#" className="text-gray-200 hover:text-white flex items-center">Resources <span className="ml-1">&#9662;</span></a></li>
                                    <li><a href="#" className="text-gray-200 hover:text-white">Contact</a></li>
                              </ul>
                        </div>

                        {/* Right Section: Language, Login, Get Started */}
                        <div className="flex items-center space-x-4">
                              <a href="#" className="text-gray-200 hover:text-white hidden lg:flex items-center">Language <span className="ml-1">&#9662;</span></a>
                              <button className="bg-transparent text-white border border-white border-opacity-30 rounded-full px-5 py-2 hover:bg-white hover:bg-opacity-20 transition-colors duration-200">
                                    Log in
                              </button>
                              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-5 py-2 shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200">
                                    Get started
                              </button>
                        </div>

                        {/* Mobile menu button (for later implementation if needed) */}
                        <div className="md:hidden flex items-center">
                              <button className="text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                              </button>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;
