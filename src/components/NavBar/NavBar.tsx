import { useState } from "react";
import { NavLink } from "react-router-dom"; // Импортируем NavLink
import "./../../styles/NavBar.css"; // Импортируем стили

const Navbar = () => {
  const [isUsersMenuOpen, setUsersMenuOpen] = useState(false); // Состояние для раскрывающегося списка

  return (
    <div className="navbar">
      {/* Раздел 1: Логотип и колокольчик */}
      <div className="navbar_header">
        <div className="logo">
          R | <span className="logo_text">R E D E V</span>
        </div>
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

        {/* Подменю с двумя ссылками (используем NavLink) */}
        {isUsersMenuOpen && (
          <div className="submenu">
            <NavLink
              to="/modules" // Путь к странице модулей
              className={({ isActive }) =>
                isActive ? "submenu_item active" : "submenu_item"
              }
            >
              Модули
            </NavLink>
            <NavLink
              to="/theory" // Путь к странице теории
              className={({ isActive }) =>
                isActive ? "submenu_item active" : "submenu_item"
              }
            >
              Теория
            </NavLink>
          </div>
        )}

        {/* Остальные ссылки (теперь через NavLink) */}
        <NavLink
          to="/modules" // Путь к странице модулей
          className={({ isActive }) =>
            isActive ? "menu_item active" : "menu_item"
          }
        >
          Модули
        </NavLink>
        <NavLink
          to="/theory" // Путь к странице теории
          className={({ isActive }) =>
            isActive ? "menu_item active" : "menu_item"
          }
        >
          Теория
        </NavLink>
        <NavLink
          to="/tasks" // Путь к странице задач
          className={({ isActive }) =>
            isActive ? "menu_item active" : "menu_item"
          }
        >
          Задачи
        </NavLink>
        <NavLink
          to="/checklist" // Путь к странице чек-листа
          className={({ isActive }) =>
            isActive ? "menu_item active" : "menu_item"
          }
        >
          Чек лист
        </NavLink>
      </div>

      {/* Раздел 3: Кнопка выхода */}
      <div className="navbar_footer">
        <button className="logout_button">
          <span className="logout_icon">🚪</span> Выйти
        </button>
      </div>
    </div>
  );
};

export default Navbar;
