const LoadingSpinner = () => {
  return (
    <span className="flex items-center gap-2">
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
  );
};

export default LoadingSpinner;
