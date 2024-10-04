import React from "react";

export function Home() {
  return (
    <>
      <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">MinhaLogo</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Sobre
            </a>
            <a href="#" className="hover:text-gray-300">
              Contato
            </a>
          </div>
        </div>
      </nav>
      <div className="flex bg-black w-full h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold text-glow shadow-lg text-white text-[200px] ">
            LOREM IPSUM
          </h1>
          <h1 className="font-bold absolute transform translate-y-4  text-white text-[200px] text-outline text-texture">
            LOREM IPSUM
          </h1>
          <h1 className="font-bold absolute transform -translate-y-5 text-white text-[200px] text-outline">
            LOREM IPSUM
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white w-full h-full">
        <div className="bg-gradient-to-b flex flex-col items-center from-black to-white w-full h-full">
          <div className="h-2 w-10/12 bg-white m-1 "></div>
          <div className="h-2 w-11/12 bg-white m-3 shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]"></div>
          <div className="h-2 w-10/12 bg-white m-1 "></div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Home;
