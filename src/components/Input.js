import React from "react";

/**
 * 輸入框元件，支持不同類型和狀態
 * @param {Object} props - 組件屬性
 * @param {string} props.type - 輸入框類型
 * @param {string} props.label - 輸入框標籤
 * @param {string} props.placeholder - 輸入框提示文字
 * @param {boolean} props.error - 是否顯示錯誤狀態
 * @param {string} props.errorMessage - 錯誤消息
 * @param {boolean} props.disabled - 是否禁用
 * @param {boolean} props.fullWidth - 是否佔滿寬度
 * @param {React.ReactNode} props.prefix - 前綴內容
 * @param {React.ReactNode} props.suffix - 後綴內容
 */
const Input = ({
  type = "text",
  label,
  placeholder,
  error = false,
  errorMessage,
  disabled = false,
  fullWidth = false,
  prefix,
  suffix,
  className = "",
  ...props
}) => {
  // 基本樣式
  const baseStyle =
    "rounded-md border py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5A80] focus:border-transparent transition-colors";

  // 狀態樣式
  const stateStyle = error
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300";

  // 禁用樣式
  const disabledStyle = disabled
    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
    : "bg-white";

  // 寬度樣式
  const widthStyle = fullWidth ? "w-full" : "";

  // 組合樣式
  const inputClass = `${baseStyle} ${stateStyle} ${disabledStyle} ${widthStyle} ${className}`;

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className={`${inputClass} ${prefix ? "pl-10" : ""} ${
            suffix ? "pr-10" : ""
          }`}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {suffix}
          </div>
        )}
      </div>
      {error && errorMessage && (
        <p className="mt-1 text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
