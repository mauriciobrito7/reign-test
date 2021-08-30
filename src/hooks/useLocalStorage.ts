import { useState, useEffect, useRef } from "react";

export default function useLocalStorage(
  key: string,
  defaultValue: any,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [value, setValue] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      window.localStorage.remove(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(value));
  }, [value, serialize, key]);

  return [value, setValue];
}