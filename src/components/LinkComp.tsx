"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import LoadingSpinner from "./LoadingSpinner";
import { MdOutlineContentCopy } from "react-icons/md";

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
  const [isDeletingThisOne, setIsDeletingThisOne] = useState(false);

  const copyToClipboard = async (copyLink: string) => {
    try {
      await navigator.clipboard.writeText(copyLink);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
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
          {isCoppied ? (
            <div>
              <svg
                className="w-6 h-6 text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="neonShadowGreen"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <title>Copied</title>

                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#neonShadowGreen)"
                />
              </svg>
            </div>
          ) : (
            <MdOutlineContentCopy className="size-6 text-blue-400 drop-shadow-blue-400 drop-shadow-sm" />
          )}
        </button>
        <button
          disabled={isDeletingTheText}
          onClick={() => {
            setIsDeletingThisOne(true);
            handleDelete(itemId);
          }}
          className="p-1 rounded  cursor-pointer hover:scale-120 transition-all duration-300  bg-transparent "
        >
          {isDeletingTheText && isDeletingThisOne ? (
            <LoadingSpinner
              textColor={isCoppied ? "text-green-400" : "text-blue-400"}
            />
          ) : (
            <RiDeleteBinLine className={`size-6 text-white/70`} />
          )}
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
    </div>
  );
}

export default LinkComp;
