export const sizeVariants = {
  default: "px-6",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
  icon: "px-4",
};

export const roundedVariants = {
  default: "rounded-full",
  sm: "rounded-xs",
  md: "rounded-sm",
  lg: "rounded-lg",
};

export const defaultProps = ["default", "sm", "md", "lg"] as const;

export const colorVariants = {
  lime: {
    base: "from-lime-200 via-lime-500 to-lime-100 text-lime-900 border-lime-800",
    inner:
      "from-lime-400 to-lime-200 group-hover:from-lime-500 group-hover:to-lime-300 group-active:from-lime-400 group-active:to-lime-200 border-lime-100",
    shadow: "text-lime-100",
  },
  aqua: {
    base: "from-cyan-200 via-cyan-500 to-cyan-100 text-cyan-900 border-cyan-800",
    inner:
      "from-cyan-400 to-cyan-200 group-hover:from-cyan-500 group-hover:to-cyan-300 group-active:from-cyan-400 group-active:to-cyan-200 border-cyan-100",
    shadow: "text-cyan-100",
  },
  lilac: {
    base: "from-purple-200 via-purple-500 to-purple-100 text-purple-900 border-purple-800",
    inner:
      "from-purple-400 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-300 group-active:from-purple-400 group-active:to-purple-200 border-purple-100",
    shadow: "text-purple-100",
  },
  cherry: {
    base: "from-red-200 via-red-500 to-red-100 text-red-900 border-red-800",
    inner:
      "from-red-400 to-red-200 group-hover:from-red-500 group-hover:to-red-300 group-active:from-red-400 group-active:to-red-200 border-red-100",
    shadow: "text-red-100",
  },
  amber: {
    base: "from-orange-200 via-orange-500 to-orange-100 text-orange-900 border-orange-800",
    inner:
      "from-orange-400 to-orange-200 group-hover:from-orange-500 group-hover:to-orange-300 group-active:from-orange-400 group-active:to-orange-200 border-orange-100",
    shadow: "text-orange-100",
  },
  daisy: {
    base: "from-yellow-200 via-yellow-500 to-yellow-100 text-yellow-900 border-yellow-800",
    inner:
      "from-yellow-400 to-yellow-200 group-hover:from-yellow-500 group-hover:to-yellow-300 group-active:from-yellow-400 group-active:to-yellow-200 border-yellow-100",
    shadow: "text-yellow-100",
  },
  frosted: {
    base: "from-gray-200 via-gray-300 to-gray-100 text-gray-600 border-gray-800",
    inner:
      "from-gray-200 to-white group-hover:from-gray-300 group-hover:to-gray-50 group-active:from-gray-200 group-active:to-white border-gray-100",
    shadow: "text-gray-100",
  },
  silver: {
    base: "from-gray-200 via-gray-500 to-gray-100 text-gray-900 border-gray-800",
    inner:
      "from-gray-400 to-gray-200 group-hover:from-gray-500 group-hover:to-gray-300 group-active:from-gray-400 group-active:to-gray-200 border-gray-100",
    shadow: "text-gray-200",
  },
  minimal: {
    base: "bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-800",
  },
};

export const baseStyles = {
  button:
    "group cursor-pointer bg-gradient-to-b active:bg-gradient-to-t border-[0.5px] shadow-sm active:shadow-md active:scale-97 hover:scale-103 transition-scale-shadow-colors-gradient relative z-0 overflow-hidden border-border",
  child: "relative z-10 w-full flex items-center justify-center gap-2 pointer-events-none",
  inner:
    "bg-gradient-to-b transition-colors absolute inset-[2.5px] rounded-full shadow-xs border-t-[0.5px] overflow-hidden",
  shadow:
    "absolute select-none pointer-events-none inset-0 z-9 translate-y-[0.5px] group-active:translate-y-[0.4px] flex items-center justify-center gap-2",
  border: "border-border",
  animate: "hover:scale-100 active:scale-100 active:shadow-sm hover:text-normal active:bg-normal cursor-auto",
};
