"use client";

import { useState, useEffect, useCallback } from "react";

type SetValue<T> = (value: T | ((val: T | undefined) => T)) => void;

function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T | undefined, SetValue<T>, () => void, () => void] {
  // Fungsi untuk mendapatkan nilai dari localStorage
  const readValue = useCallback((): T | undefined => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State untuk menyimpan nilai
  const [storedValue, setStoredValue] = useState<T | undefined>(readValue);

  // Fungsi untuk memperbarui nilai di state dan localStorage
  const setValue: SetValue<T> = useCallback(
    (value) => {
      if (typeof window === "undefined") {
        console.warn(
          `Tried setting localStorage key "${key}" even though environment is not a client`,
        );
      }

      try {
        // Izinkan value berupa fungsi
        const newValue = value instanceof Function ? value(storedValue) : value;

        // Simpan ke localStorage
        window.localStorage.setItem(key, JSON.stringify(newValue));

        // Simpan state
        setStoredValue(newValue);

        // Dispatch event agar listener lain bisa mendengar perubahan
        window.dispatchEvent(new Event("local-storage"));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue],
  );

  // Fungsi untuk menghapus item dari localStorage
  const removeItem = useCallback(() => {
    if (typeof window === "undefined") {
      console.warn(
        `Tried removing localStorage key "${key}" even though environment is not a client`,
      );
    }

    try {
      window.localStorage.removeItem(key);
      setStoredValue(undefined);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key]);

  // Fungsi untuk menghapus semua item dari localStorage
  const clearAll = useCallback(() => {
    if (typeof window === "undefined") {
      console.warn(
        `Tried to clear localStorage even though environment is not a client`,
      );
    }

    try {
      window.localStorage.clear();
      setStoredValue(undefined);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error clearing localStorage:`, error);
    }
  }, []);

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // Tambahkan event listener
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      // Hapus event listener saat unmount
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, [readValue]);

  return [storedValue, setValue, removeItem, clearAll];
}

export default useLocalStorage;
