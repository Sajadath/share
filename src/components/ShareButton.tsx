type ShareButtonProps = {
  handleClick: () => void;
  isSavingTheText: boolean;
};

function ShareButton({ handleClick, isSavingTheText }: ShareButtonProps) {
  return (
    <button
      disabled={isSavingTheText}
      className=" rounded-2xl py-2 px-4 transition-all duration-200 bg-blue-400 hover:bg-green-400  font-bold outline-none shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)] border-blue-400 shadow-blue-400 hover:border-green-400 hover:shadow-green-500 text-black cursor-pointer active:translate-y-1.5 disabled:opacity-30 disabled:active:translate-0"
      onClick={handleClick}
    >
      {isSavingTheText ? (
        <span className="flex items-center gap-2">
          <span className="font-semibold">Saving...</span>
          <svg
            className="w-5 h-5 text-black animate-spin"
            viewBox="0 0 50 50"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
            <path
              className="opacity-100"
              fill="currentColor"
              d="M25 5a20 20 0 0120 20h-5a15 15 0 10-15-15V5z"
            />
          </svg>
        </span>
      ) : (
        "Share"
      )}
    </button>
  );
}

export default ShareButton;
