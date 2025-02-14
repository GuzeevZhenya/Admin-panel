import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  userModuleSlice,
  userModulesReducer,
} from "features/Modul/ModuleSlice";
import { recipeSlice } from "features/Api/TheorySlice";

// Функция для загрузки данных из localStorage
function loadStateFromLocalStorage(key: string, defaultValue: any): any {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error loading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

// Функция для сохранения данных в localStorage
function saveStateToLocalStorage(key: string, state: any): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.warn(`Error saving localStorage key "${key}":`, error);
  }
}

// Создаем store
export const store = configureStore({
  reducer: {
    [userModuleSlice.name]: userModulesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [recipeSlice.reducerPath]: recipeSlice.reducer, // Reducer для theorySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(recipeSlice.middleware), // Middleware для theorySlice
  preloadedState: {
    [userModuleSlice.name]: {
      modules: loadStateFromLocalStorage("modules", []), // Загрузка модулей из localStorage
    },
  },
});

// Подписываемся на изменения состояния и сохраняем данные в localStorage
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage("modules", state[userModuleSlice.name]?.modules); // Сохраняем только модули
});

setupListeners(store.dispatch);

// Export RootState для использования в useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
