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
                      src="https://rr4---sn-aj4g55-5v.googlevideo.com/videoplayback?expire=1766856525&ei=7cJPad-JG--Di9oPmdaBYA&ip=172.71.172.4&id=o-ANWNjs39nxLcepfNMrF_FBQKLiv_atSkeRBXW77AV-xq&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&ctier=A&pfa=5&hightc=yes&siu=1&bui=AYUSA3C8Z15Vx0knFkoiTrcEJ-cA50mN3-Yf4Ob55_8KXGkMPz2er-c_wT2C8BMEjYK3u5PB_w&spc=wH4Qq-lMPkJ0DZ4I6FWOyvtZwNmWf5lI-PUeDLVGmwu06PJ5TcqI5wNOLQ&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=38208633&dur=124.033&lmt=1765518006081358&keepalive=yes&fexp=51552689,51565116,51565682,51580968&txp=5432534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAN0Ke3TnGf3LsX5fzunuTy3X618bCOCtEV-eCIAyxyxxAiEA1javkk4U3jQHK2DGnFrHlXc3gfRpOp6pUbF-teKtk4k%3D&redirect_counter=1&rm=sn-4g5ekr76&rrc=104&req_id=ffc8fb9a926ba3ee&cms_redirect=yes&cmsv=e&cps=43&ipbypass=yes&met=1766839442,&mh=CY&mip=2a01:4f8:1c1b:2051::1&mm=31&mn=sn-aj4g55-5v&ms=au&mt=1766838500&mv=u&mvi=4&pl=63&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgFPAs4kUMHPnRmzht-2ltXhqzevKUTuUtMFw9hz_HpigCIBhrpSnRSbSgfR5etphMhOJn9BPbbs9nvcTdNEPxSqvP"
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
