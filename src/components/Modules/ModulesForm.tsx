import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addModels, editModel } from "features/Modul/ModuleSlice";
import { v4 as uuidv4 } from "uuid"; // Для генерации уникальных ID
import { Module } from "./Modules";

interface ModulesFormProps {
  isModalOpen: boolean;
  onClose: () => void;
  selectedModule?: Module | null; // Выбранный модуль для редактирования
}

const ModulesForm: React.FC<ModulesFormProps> = ({
  isModalOpen,
  onClose,
  selectedModule,
}) => {
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleColor, setNewModuleColor] = useState("#000000");
  const dispatch = useDispatch();

  // Используем useEffect для обновления состояния, когда selectedModule изменяется
  useEffect(() => {
    if (selectedModule) {
      setNewModuleTitle(selectedModule.title);
      setNewModuleColor(selectedModule.color);
    } else {
      setNewModuleTitle("");
      setNewModuleColor("#000000");
    }
  }, [selectedModule]);

  const handleAddOrEditModule = () => {
    if (newModuleTitle.trim() === "") {
      alert("Введите название модуля!");
      return;
    }

    if (selectedModule) {
      // Если модуль выбран, редактируем его
      dispatch(
        editModel({
          id: selectedModule.id,
          updatedTitle: newModuleTitle,
          updatedColor: newModuleColor,
        })
      );
    } else {
      // Иначе добавляем новый модуль
      const newModuleId = uuidv4(); // Генерируем уникальный ID
      dispatch(
        addModels({
          id: newModuleId,
          title: newModuleTitle,
          color: newModuleColor,
        })
      );
    }

    // Сбрасываем состояние формы
    setNewModuleTitle("");
    setNewModuleColor("#000000");
    onClose(); // Закрываем форму
  };

  const availableColors = [
    "#ff5733",
    "#33ff57",
    "#3357ff",
    "#f3ff33",
    "#ff33f3",
    "#33fff3",
    "#f333ff",
    "#33f3ff",
    "#ff9933",
    "#33ff99",
    "#9933ff",
    "#ff3399",
    "#3399ff",
    "#99ff33",
    "#695f13",
    "#78fj43",
    "#ff3152",
    "#ff3ff9",
  ];

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>
              {selectedModule ? "Редактировать модуль" : "Добавить модуль"}
            </h3>
            <input
              type="text"
              placeholder="Название модуля"
              value={newModuleTitle} // Используем состояние для контроля значения инпута
              onChange={(e) => setNewModuleTitle(e.target.value)}
            />
            <div className="color-picker">
              <label>Цвет:</label>
              <div className="color-options">
                {availableColors.map((color) => (
                  <div
                    key={color}
                    className="color-option"
                    style={{ backgroundColor: color }}
                    onClick={() => setNewModuleColor(color)}
                  >
                    {newModuleColor === color && (
                      <span className="selected">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="confirm-button"
                onClick={handleAddOrEditModule}
              >
                Готово
              </button>
              <button className="cancel-button" onClick={onClose}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModulesForm;