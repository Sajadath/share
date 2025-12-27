"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full h-dvh flex items-center gap-4 justify-center  text-white relative">
      <Image
        draggable={false}
        className="select-none pointer-events-none -z-1 object-cover"
        src="/background.jpg"
        alt="Background Image"
        fill
      />
      <div className="flex flex-col gap-4 items-end">
        <span className="w-15 h-0.5 bg-white rounded-l-2xl " />
        <span className="w-20 h-0.5 bg-white rounded-l-2xl " />
        <span className="w-15 h-0.5 bg-white rounded-l-2xl " />
      </div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg overflow-hidden shadow-lg shadow-black relative"
      >
        <Image
          src="/diablo.webp"
          className="object-cover object-center h-150 w-100"
          width={936}
          height={527}
          alt="Diablo"
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              exit={{ opacity: 0, translateY: "100%" }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 bottom-0 left-0 right-0 inset-0 flex flex-col "
            >
              <AnimatePresence>
                {hovered && (
                  <div className="w-full h-1/2">
                    <motion.video
                      initial={{
                        opacity: 0,
                        translateY: "100%",
                        transformOrigin: "bottom",
                      }}
                      animate={{
                        opacity: 1,
                        translateY: "0%",
                        transformOrigin: "bottom",
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        translateY: "100%",
                        transformOrigin: "bottom",
                      }}
                      transition={{ duration: 0.4 }}
                      loop
                      playsInline
                      autoPlay
                      muted
                      className="w-full h-full object-cover "
                      src="https://uupload.ir/view/ytdown.com_youtube_diablo-iv-story-launch-trailer_media_hukrlkmcz1i_006_144p_nedw.mp4/"
                    ></motion.video>
                  </div>
                )}
              </AnimatePresence>

              <div className="relative w-full h-1/2 bg-linear-to-r  from-blue-950 via-blue-900 to-blue-800 z-10">
                <p className="font-bold px-4 pt-3 text-2xl">Diablo</p>
                <p className="text-sky-400 text-xs px-4 px">
                  Very Positive (44,000)
                </p>
              </div>
              <button
                onClick={() => {
                  window.alert("added to your cart");
                }}
                className="absolute bottom-4 left-4 z-10 py-1 px-3 bg-lime-500 cursor-pointer hover:bg-lime-400"
              >
                <span className="text-gray-100">Add to Cart</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className={`absolute font-bold bottom-0 right-0 flex rounded-l overflow-hidden z-10 duration-500 transition-transform ${
            hovered ? "-translate-y-4" : "translate-y-0"
          }`}
        >
          <div className="bg-lime-300 text-black p-1 ">-50%</div>
          <div className="bg-black/50 flex items-center justify-center text-white py-1 px-3 backdrop-blur-2xl text-sm gap-3">
            <div className="line-through text-gray-400">40$</div>
            <div>20$</div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <span className="w-15 h-0.5 bg-white rounded-r-2xl " />
        <span className="w-20 h-0.5 bg-white rounded-r-2xl " />
        <span className="w-15 h-0.5 bg-white rounded-r-2xl " />
      </div>
    </div>
  );
}
