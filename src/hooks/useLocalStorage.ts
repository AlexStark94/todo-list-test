import { useState } from 'react';

/**
 * Custom hook that manages the state of a value stored in the browser's local storage.
 *
 * @param {string} key - The key used to store the value in local storage.
 * @param {T} initialValue - The initial value of the state.
 * @return {[T, React.Dispatch<React.SetStateAction<T>>]} - A tuple containing the stored value and a function to update it.
 */
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
