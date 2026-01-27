import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="px-2 py-6 flex items-center justify-center gap-3 ">
      {[0, 0.15, 0.3].map((delay, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            delay,
          }}
          className="w-3 h-3 rounded-full border border-blue-400
                     shadow-[0_0_10px_2px,inset_0_0_4px_2px] shadow-blue-400"
        />
      ))}
    </div>
  );
};

export default Loading;
