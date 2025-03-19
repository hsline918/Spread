import React from "react";

/**
 * 按鈕元件，支援多種樣式變體
 * @param {Object} props - 組件屬性
 * @param {string} props.variant - 按鈕樣式：'primary', 'secondary', 'outline', 'text'
 * @param {string} props.size - 按鈕尺寸：'sm', 'md', 'lg'
 * @param {boolean} props.fullWidth - 是否占滿寬度
 * @param {React.ReactNode} props.children - 按鈕內容
 * @param {React.ReactNode} props.icon - 按鈕圖標
 */
const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  icon,
  children,
  className = "",
  ...props
}) => {
  // 基本樣式
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors";

  // 變體樣式
  const variantStyles = {
    primary:
      "bg-[#3D5A80] hover:bg-[#2d4361] text-white focus-visible:ring-[#98C1D9]",
    secondary:
      "bg-[#98C1D9] hover:bg-[#7ba9c5] text-[#293241] focus-visible:ring-[#3D5A80]",
    outline:
      "border border-[#3D5A80] text-[#3D5A80] hover:bg-[#f0f5f9] focus-visible:ring-[#3D5A80]",
    text: "text-[#3D5A80] hover:bg-[#f0f5f9] focus-visible:ring-[#3D5A80]",
    danger:
      "bg-[#EE6C4D] hover:bg-[#e85735] text-white focus-visible:ring-[#EE6C4D]",
  };

  // 尺寸樣式
  const sizeStyles = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-sm px-3 py-2 gap-2",
    lg: "text-base px-4 py-2.5 gap-2",
  };

  // 禁用樣式
  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // 寬度樣式
  const widthStyle = fullWidth ? "w-full" : "";

  const buttonClass = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${widthStyle} ${className}`;

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
