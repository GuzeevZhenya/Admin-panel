// src/components/Navbar.tsx
import { useState } from "react";
import "./../../styles/NavBar.css"; // Импортируем стили

const Navbar = () => {
  const [isUsersMenuOpen, setUsersMenuOpen] = useState(false); // Состояние для раскрывающегося списка

  return (
    <div className="navbar">
      {/* Раздел 1: Логотип и колокольчик */}
      <div className="navbar_header">
        <div className="logo">Redev Admin</div>
        <div className="notifications">
          <span className="bell">🔔</span>
          <span className="notification_count">5</span>
        </div>
      </div>

      {/* Раздел 2: Раскрывающийся список страниц */}
      <div className="navbar_menu">
        {/* Кнопка для открытия списка пользователей */}
        <div
          className="menu_item"
          onClick={() => setUsersMenuOpen(!isUsersMenuOpen)}
        >
          Все пользователи
          {isUsersMenuOpen ? (
            <span className="arrow">▲</span>
          ) : (
            <span className="arrow">▼</span>
          )}
        </div>

        {/* Подменю с двумя ссылками */}
        {isUsersMenuOpen && (
          <div className="submenu">
            <a href="#modules" className="submenu_item">
              Модули
            </a>
            <a href="#theory" className="submenu_item">
              Теория
            </a>
          </div>
        )}

        {/* Остальные ссылки */}
        <div className="menu_item">Модули</div>
        <div className="menu_item">Теория</div>
        <div className="menu_item">Задачи</div>
        <div className="menu_item">Чек лист</div>
      </div>

      {/* Раздел 3: Кнопка выхода */}
      <div className="navbar_footer">
        <button className="logout_button">Выход</button>
      </div>
    </div>
  );
};

export default Navbar;
