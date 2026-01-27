"use client";
import { motion } from "motion/react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function LinkComp({
  itemValue,
  isDeletingTheText,
  itemId,
  handleDelete,
}: {
  itemValue: string;
  isDeletingTheText: boolean;
  itemId: string;
  handleDelete: (id: string) => void;
}) {
  const [isCoppied, setIsCoppied] = useState(false);

  const copyToClipboard = async (copyLink: string) => {
    try {
      await navigator.clipboard.writeText(copyLink);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex p-3 w-full bg-black/10 flex-col gap-2 border-2 shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)] rounded-2xl transition-all duration-500  ${
        isCoppied
          ? "border-green-400 shadow-green-400"
          : "border-blue-400 shadow-blue-400"
      } `}
    >
      <div className="flex items-center justify-between ">
        <button
          className="p-2   rounded cursor-pointer hover:scale-120 transition-all duration-300 bg-linear-to-br shadow-lg shadow-black from-black -900 to-transparent"
          disabled={isCoppied}
          onClick={async () => {
            await copyToClipboard(itemValue);
            setIsCoppied(true);
          }}
        >
          {isCoppied ? "✅" : "©️"}
        </button>
        <button
          onClick={() => handleDelete(itemId)}
          className="p-2   rounded cursor-pointer hover:scale-120 transition-all duration-300 bg-linear-to-br shadow-lg shadow-black from-black -900 to-transparent"
        >
          {isDeletingTheText ? <LoadingSpinner /> : "❌"}
        </button>
      </div>
      <p
        onClick={async () => {
          await copyToClipboard(itemValue);
          setIsCoppied(true);
        }}
        className={`wrap-break-word max-w-full  transition-all  duration-500 ${
          isCoppied ? "text-green-400" : "text-blue-400"
        }`}
      >
        {itemValue}
      </p>
    </motion.div>
  );
}

export default LinkComp;
