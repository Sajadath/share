type ShareButtonProps = {
  handleClick: () => void;
};

function ShareButton({ handleClick }: ShareButtonProps) {
  return (
    <button
      className=" rounded-2xl py-2 px-4 transition-all duration-200 bg-blue-400 hover:bg-green-400  font-bold outline-none shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)] border-blue-400 shadow-blue-400 hover:border-green-400 hover:shadow-green-500 text-black cursor-pointer active:translate-y-1.5 "
      onClick={handleClick}
    >
      Share
    </button>
  );
}

export default ShareButton;
