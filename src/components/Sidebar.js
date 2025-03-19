import React from "react";
import { Link } from "react-router-dom";

/**
 * 側邊欄導航組件
 * @param {Object} props - 組件屬性
 * @param {Array} props.navItems - 導航項目配置，每項包含 { path, label, icon, isActive }
 * @param {string} props.logo - logo URL 或 React 元素
 * @param {boolean} props.collapsed - 是否折疊側邊欄
 * @param {function} props.onToggleCollapse - 折疊/展開回調
 */
const Sidebar = ({
  navItems = [],
  logo,
  collapsed = false,
  onToggleCollapse,
  className = "",
  ...props
}) => {
  // 樣式配置
  const sidebarClass = `bg-white border-r border-gray-200 h-screen ${
    collapsed ? "w-16" : "w-64"
  } transition-all duration-300 ${className}`;

  // 導航項樣式
  const baseNavItemClass =
    "flex items-center px-4 py-3 text-sm transition-colors rounded-md mb-1";
  const activeNavItemClass = "bg-[#F0F5F9] text-[#3D5A80] font-medium";
  const inactiveNavItemClass = "text-gray-600 hover:bg-gray-50";

  return (
    <div className={sidebarClass} {...props}>
      {/* 頂部 Logo */}
      <div className="p-4 flex items-center">
        {logo && (
          <div className={`${collapsed ? "mx-auto" : "mr-2"}`}>
            {typeof logo === "string" ? (
              <img src={logo} alt="Logo" className="h-8" />
            ) : (
              logo
            )}
          </div>
        )}
        {!collapsed && (
          <h1 className="text-lg font-bold text-[#3D5A80]">Threads AI 教練</h1>
        )}
      </div>

      {/* 導航選單 */}
      <nav className="mt-6 px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${baseNavItemClass} ${
              item.isActive ? activeNavItemClass : inactiveNavItemClass
            }`}
          >
            {item.icon && (
              <span className={`text-xl ${collapsed ? "mx-auto" : "mr-3"}`}>
                {item.icon}
              </span>
            )}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* 底部折疊按鈕 */}
      {onToggleCollapse && (
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
