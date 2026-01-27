import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface InputProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  handleEnter: () => void;
}

const MAX_HEIGHT = 200; // px (adjust as you like)

const Input: FC<InputProps> = ({ inputValue, setInputValue, handleEnter }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  }, [inputValue]);

  return (
    <textarea
      ref={textareaRef}
      value={inputValue}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleEnter();
        }
      }}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      placeholder="Text That You Wanna Share..."
      name="textInput"
      id="textInput"
      rows={1}
      className="
        w-full max-w-140 min-w-75
        rounded-2xl py-3 px-4
        border-2 outline-none
        font-bold text-blue-400
        placeholder:font-bold placeholder:text-blue-400/50 placeholder:transition-all placeholder:duration-300
        focus:text-green-400 focus:placeholder:text-green-400/50
        border-blue-400 shadow-blue-400
        focus:border-green-400 focus:shadow-green-500
        shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)]
        transition-all duration-300
        resize-none overflow-hidden
      "
    />
  );
};

export default Input;
