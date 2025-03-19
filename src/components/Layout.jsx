import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

/**
 * 主佈局組件，包含側邊欄和內容區
 * @param {Object} props - 組件屬性
 * @param {React.ReactNode} props.children - 佈局內容
 * @param {boolean} props.fluid - 是否使用滿寬佈局
 * @param {Object} props.user - 當前用戶信息
 * @param {function} props.onSearch - 全局搜索回調
 */
const Layout = ({ children, fluid = false, user, onSearch }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // 導航項配置
  const navItems = [
    {
      path: "/growth-strategy",
      label: "增粉策略顧問",
      icon: "📈",
      isActive: location.pathname === "/growth-strategy",
    },
    {
      path: "/content-analysis",
      label: "內容優化分析器",
      icon: "📊",
      isActive: location.pathname === "/content-analysis",
    },
    {
      path: "/posting-schedule",
      label: "發文排程日曆",
      icon: "📆",
      isActive: location.pathname === "/posting-schedule",
    },
    {
      path: "/knowledge-base",
      label: "社群經營知識庫",
      icon: "📚",
      isActive: location.pathname === "/knowledge-base",
    },
  ];

  // 獲取當前頁面標題
  const getPageTitle = () => {
    const currentNav = navItems.find((item) => item.isActive);
    return currentNav ? currentNav.label : "首頁";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 側邊欄 */}
      <Sidebar
        navItems={navItems}
        logo="🧠"
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* 主內容區 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={getPageTitle()}
          showSearch={true}
          onSearch={onSearch}
          user={user}
        />

        <main className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className={fluid ? "w-full" : "max-w-7xl mx-auto"}>
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
