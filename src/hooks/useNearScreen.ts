import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const [loadMore, setLoadMore] = useState(false);
  const element = useRef<any>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setLoadMore(true);
        observer.disconnect();
      }
      if (null !== element.current && undefined !== element.current) {
        observer.observe(element.current);
      }
    });
  }, [element]);

  return [loadMore, element];
}