import { useState } from "react";

export function useLocalStorage(key, defualtValue) {
  const getInitialValue = () =>
    localStorage.getItem("birthDate") ?? defualtValue;
  const [value, setValue] = useState(getInitialValue);
  const setAnndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setAnndStoreValue];
}
