import React from "react";
import Input from "./Input";

/**
 * 頂部導航欄組件
 * @param {Object} props - 組件屬性
 * @param {string} props.title - 頁面標題
 * @param {React.ReactNode} props.actions - 右側操作按鈕
 * @param {boolean} props.showSearch - 是否顯示搜索框
 * @param {function} props.onSearch - 搜尋回調函數
 * @param {Object} props.user - 用戶信息
 */
const Header = ({
  title,
  actions,
  showSearch = false,
  onSearch,
  user,
  className = "",
  ...props
}) => {
  return (
    <header
      className={`bg-white border-b border-gray-200 py-3 px-4 sm:px-6 flex items-center justify-between ${className}`}
      {...props}
    >
      {/* 左側標題 */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>

      {/* 中間搜索框 */}
      {showSearch && (
        <div className="mx-4 flex-1 max-w-md">
          <Input
            type="search"
            placeholder="搜尋..."
            prefix={<span className="text-gray-400">🔍</span>}
            fullWidth
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
      )}

      {/* 右側操作區域 */}
      <div className="flex items-center space-x-4">
        {actions && <div className="flex space-x-2">{actions}</div>}

        {/* 用戶簡介 */}
        {user && (
          <div className="flex items-center">
            <div className="hidden md:block mr-2">
              <div className="text-sm font-medium text-gray-900">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">@{user.username}</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-[#3D5A80] text-white flex items-center justify-center overflow-hidden">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm font-medium">
                  {user.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
