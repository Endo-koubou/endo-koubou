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

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isIntersecting]);

  return [ref, isIntersecting];
}
