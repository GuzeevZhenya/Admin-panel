// Modules.tsx
import React, { useState } from "react";
import "../../styles/Modules.css"; // Стили для компонента
import ModulesForm from "./ModulesForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { removeModel } from "features/Modul/ModuleSlice";

export interface Module {
  id: string; // Уникальный идентификатор модуля
  title: string; // Название модуля
  color: string; // Цвет модуля
}

const Modules: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modules = useSelector((state: RootState) => state.userModules.modules);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null); // Выбранный модуль для редактирования
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setSelectedModule(null); // Сбрасываем выбранный модуль при закрытии формы
  };

  // Функция для удаления модуля
  const handleDeleteModule = (id: string) => {
    dispatch(removeModel({ id }));
  };

  return (
    <div className="modules-container">
      {/* Заголовок и кнопка "Добавить модуль" */}
      <div className="header">
        <h2>Модули</h2>
        <button className="add-button" onClick={toggleModal}>
          Добавить модуль
        </button>
      </div>

      {/* Форма для добавления/редактирования модуля */}
      <ModulesForm
        isModalOpen={isModalOpen}
        onClose={toggleModal}
        selectedModule={selectedModule || undefined}
      />

      <div className="modules-list">
        {modules.map((module) => (
          <div
            key={module.id}
            className="module-card"
            style={{ backgroundColor: module.color }}
          >
            <div className="module-info">
              <h4>{module.title}</h4>
            </div>
            <div className="module-actions">
              <button
                className="edit-button"
                onClick={() => {
                  setSelectedModule(module); // Устанавливаем выбранный модуль
                  setIsModalOpen(true); // Открываем форму
                }}
              >
                Редактировать
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteModule(module.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
