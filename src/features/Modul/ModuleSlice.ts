// ModuleSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface Module {
  id: string;
  title: string;
  color: string;
}

export const userModuleSlice = createSlice({
  name: "userModules",
  initialState: {
    modules: [] as Module[], // Список модулей
  },
  reducers: {
    addModels: (state, action: { payload: Module }) => {
      state.modules.push(action.payload); // Добавляем новый модуль
    },
    removeModel: (state, action: { payload: { id: string } }) => {
      const index = state.modules.findIndex(
        (module) => module.id === action.payload.id
      );
      if (index !== -1) {
        state.modules.splice(index, 1); // Удаляем модуль по ID
      }
    },
    editModel: (
      state,
      action: {
        payload: { id: string; updatedTitle: string; updatedColor: string };
      }
    ) => {
      const index = state.modules.findIndex(
        (module) => module.id === action.payload.id
      );
      if (index !== -1) {
        state.modules[index] = {
          ...state.modules[index], // Сохраняем остальные свойства модуля
          title: action.payload.updatedTitle, // Обновляем название
          color: action.payload.updatedColor, // Обновляем цвет
        };
      }
    },
  },
});

export const { addModels, removeModel, editModel } = userModuleSlice.actions;
export const userModulesReducer = userModuleSlice.reducer;
