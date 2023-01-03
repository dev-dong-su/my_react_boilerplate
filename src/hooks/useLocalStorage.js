import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStorage] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStorageValue = value => {
    setStorage(() => value);

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const deleteStorageValue = () => {
    window.localStorage.removeItem(key);
  };

  return { storageValue, setStorageValue, deleteStorageValue };
};

export default useLocalStorage;
