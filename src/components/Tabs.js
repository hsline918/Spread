import React, { useState } from "react";

/**
 * 標籤頁組件
 * @param {Object} props - 組件屬性
 * @param {Array} props.tabs - 標籤頁配置數組，每項包含 { id, label, content }
 * @param {string} props.defaultTab - 默認選中的標籤頁 ID
 * @param {string} props.orientation - 方向，'horizontal' 或 'vertical'
 * @param {Function} props.onChange - 標籤頁切換時的回調函數
 */
const Tabs = ({
  tabs = [],
  defaultTab,
  orientation = "horizontal",
  onChange,
  className = "",
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab || (tabs[0] && tabs[0].id)
  );

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const getTabContent = () => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    return tab ? tab.content : null;
  };

  const baseTabClass = "px-4 py-2 text-sm font-medium transition-colors";
  const activeTabClass = "text-[#3D5A80] border-b-2 border-[#3D5A80]";
  const inactiveTabClass =
    "text-gray-500 hover:text-[#3D5A80] hover:bg-gray-50";

  const isHorizontal = orientation === "horizontal";

  return (
    <div className={`w-full ${className}`} {...props}>
      <div
        className={`flex ${
          isHorizontal
            ? "flex-row border-b border-gray-200"
            : "flex-col border-r border-gray-200"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${baseTabClass} ${
              activeTab === tab.id ? activeTabClass : inactiveTabClass
            } ${isHorizontal ? "" : "text-left"}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{getTabContent()}</div>
    </div>
  );
};

export default Tabs;
