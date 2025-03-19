import React from "react";

/**
 * 卡片元件，用於展示內容區塊
 * @param {Object} props - 組件屬性
 * @param {string} props.title - 卡片標題
 * @param {React.ReactNode} props.children - 卡片內容
 * @param {React.ReactNode} props.footer - 卡片底部內容
 * @param {boolean} props.hover - 是否啟用懸停效果
 * @param {boolean} props.border - 是否顯示邊框
 * @param {string} props.className - 額外的 CSS 類名
 */
const Card = ({
  title,
  children,
  footer,
  hover = false,
  border = true,
  className = "",
  ...props
}) => {
  // 基本樣式
  const baseStyle = "bg-white rounded-lg overflow-hidden";

  // 懸停效果
  const hoverStyle = hover ? "transition-all duration-200 hover:shadow-md" : "";

  // 邊框樣式
  const borderStyle = border ? "border border-gray-200" : "";

  // 陰影效果
  const shadowStyle = "shadow-sm";

  const cardClass = `${baseStyle} ${hoverStyle} ${borderStyle} ${shadowStyle} ${className}`;

  return (
    <div className={cardClass} {...props}>
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
