import { RefObject, useEffect, useState } from "react";

interface UseFullHeightProps {
  refObj: RefObject<HTMLElement | null>;
}

export default function useFullHeight({ refObj }: UseFullHeightProps) {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = refObj.current;
    if (!el) return;

    const getFullHeight = () => {
      const rectHeight = el.getBoundingClientRect().height;
      const style = window.getComputedStyle(el);
      const marginTop = parseFloat(style.marginTop) || 0;
      const marginBottom = parseFloat(style.marginBottom) || 0;
      return rectHeight + marginTop + marginBottom;
    };

    // Defer initial measurement to avoid cascading renders
    const rafId = requestAnimationFrame(() => {
      setHeight(getFullHeight());
    });

    // ResizeObserver for dynamic changes
    const observer = new ResizeObserver(() => {
      const newHeight = getFullHeight();
      setHeight((prev) => (prev !== newHeight ? newHeight : prev));
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [refObj]);

  return height;
}
