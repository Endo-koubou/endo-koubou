import { useState, useEffect, useRef, MutableRefObject } from "react";

export function useOnScreen(): [
  MutableRefObject<HTMLDivElement | null>,
  boolean
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // ビューポートに入ったとき
      if (entry.isIntersecting && !isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isIntersecting]);

  return [ref, isIntersecting];
}
