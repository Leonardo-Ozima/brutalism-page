import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import geiselImage from "./assets/images/geisel.png";

export function Home() {
  const [text1] = useTypewriter({
    words: ["Ipsum", "Dolor", "Aeron"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });
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
            Loren {text1}
            <Cursor cursorStyle="|"></Cursor>
          </h1>
          <h1 className="font-bold absolute transform translate-y-1  text-white text-[200px] text-outline text-texture">
            Loren {text1}
            <Cursor cursorStyle="|"></Cursor>
          </h1>
          <h1 className="font-bold absolute transform -translate-y-5 text-white text-[200px] text-outline">
            Loren {text1}
            <Cursor cursorStyle="|"></Cursor>
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white w-full h-full">
        <div className="bg-gradient-to-b flex flex-col items-center from-black to-white w-full h-full">
          <div className="h-2 w-10/12 bg-white m-1 "></div>
          <div className="h-2 w-11/12 bg-white m-3 shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]"></div>
          <div className="h-2 w-10/12 bg-white m-1 "></div>

          <div className="flex flex-row h-3/4 w-4/5 bg-red-300  mt-16">
            <div className="h-full p-14 flex items-center justify-center text-justify w-1/2">
              <p className="sm:text-base md:text-xl lg:text-3xl">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu quam
                inceptos inceptos orci ridiculus eget tristique cras. Ipsum
                nascetur tempus, fusce varius torquent laoreet. Maecenas pretium
                lacus nullam integer justo dictumst mauris. Nullam ac vulputate
                morbi sit platea non quam amet ullamcorper.
              </p>
            </div>
            <div className="border-4 border-white h-full w-2"></div>
            <div className="flex h-full w-1/2 ">
              <img
                src={geiselImage}
                alt="Building"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
