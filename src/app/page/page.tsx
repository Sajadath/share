"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollXDivRef = useRef<HTMLDivElement>(null);

  // Track overall page vertical progress within this tall wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // from top entering → top leaving
  });

  // Map vertical scroll progress → horizontal position (-100% = fully scrolled right)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]); // adjust % based on content width

  // Optional: detect when we've reached the end of horizontal travel
  const atEnd = useMotionValue(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Rough way to detect "end reached" – tune thresholds to your content
    atEnd.set(latest > 0.98);
  });

  return (
    <>
      <div className="min-h-dvh bg-white/5 flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to the Page</h1>
          <p className="mt-4">Scroll down to enter horizontal magic…</p>
        </div>
      </div>

      {/* ─── The magic wrapper ─── */}
      <div
        ref={containerRef}
        className="relative w-full"
        // This height controls how much vertical scroll = full horizontal travel
        // Tune this: more vh = slower horizontal scroll
        style={{ height: "400vh" }} // 300–600vh is common range
      >
        {/* Pinned container – stays at top while scrolling through parent */}
        <div className="sticky top-0 h-dvh overflow-hidden bg-gradient-to-r from-blue-300 to-purple-900">
          <motion.div
            ref={scrollXDivRef}
            className="flex items-center h-full w-fit"
            style={{ x }} // ← animated by vertical scroll
          >
            <h2 className="text-6xl md:text-8xl font-black text-white/90 px-20 shrink-0">
              this is the long horizontal content — keep scrolling →
                  →    →    →    →    →    →    →    →    →    →    →
            </h2>

            {/* Add more content here to make it longer */}
            <div className="shrink-0 w-[120vw] h-full bg-purple-800/40 flex items-center justify-center text-white text-5xl font-bold">
              Almost there...
            </div>
            <div className="shrink-0 w-[120vw] h-full bg-indigo-800/50 flex items-center justify-center text-white text-5xl font-bold">
              End of horizontal section
            </div>
          </motion.div>
        </div>
      </div>

      {/* Next section – only reachable after horizontal finishes */}
      <div className="min-h-dvh bg-white/5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">You made it!</h1>
          <p className="mt-6 text-xl max-w-md mx-auto">
            Horizontal scroll completed → vertical scroll unlocked again
          </p>
        </div>
      </div>
    </>
  );
}
