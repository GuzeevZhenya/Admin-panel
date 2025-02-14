import { useEffect, useState } from "react";

// Кастомный хук для работы с localStorage
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Получаем данные из localStorage или используем initialValue
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // Сохраняем данные в localStorage
  const saveValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error saving localStorage key "${key}":`, error);
    }
  };

  // Состояние для хранения значения
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Обновляем значение в localStorage при изменении состояния
  useEffect(() => {
    saveValue(storedValue);
  }, [storedValue]);

  // Функция для обновления значения
  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue(
      typeof value === "function" ? (value as any)(storedValue) : value
    );
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
