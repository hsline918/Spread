import React from "react";
import Card from "./Card";

/**
 * 數據卡片組件，用於顯示關鍵統計數據
 * @param {Object} props - 組件屬性
 * @param {string} props.title - 卡片標題
 * @param {string|number} props.value - 主要數值
 * @param {string} props.unit - 單位，如 '%' 或 '次'
 * @param {React.ReactNode} props.icon - 卡片圖標
 * @param {string} props.trend - 趨勢方向，'up' 或 'down'
 * @param {number} props.trendValue - 趨勢數值，如 5.2
 * @param {string} props.trendPeriod - 趨勢時間段，如 '相比上週'
 * @param {string} props.color - 卡片主色調
 */
const DataCard = ({
  title,
  value,
  unit = "",
  icon,
  trend,
  trendValue,
  trendPeriod,
  color = "#3D5A80",
  className = "",
  ...props
}) => {
  const getTrendColor = () => {
    if (!trend) return "text-gray-500";
    return trend === "up" ? "text-green-500" : "text-red-500";
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    return trend === "up" ? "↑" : "↓";
  };

  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value;

  return (
    <Card className={`${className}`} {...props}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
          {icon && (
            <div className="text-xl" style={{ color }}>
              {icon}
            </div>
          )}
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold" style={{ color }}>
            {formattedValue}
          </span>
          {unit && <span className="ml-1 text-gray-500">{unit}</span>}
        </div>
        {trend && trendValue && (
          <div className="mt-2 flex items-center text-sm">
            <span
              className={`${getTrendColor()} font-medium flex items-center`}
            >
              {getTrendIcon()} {trendValue}%
            </span>
            {trendPeriod && (
              <span className="ml-1 text-gray-500">{trendPeriod}</span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default DataCard;
