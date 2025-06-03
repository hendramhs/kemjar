import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl",
      secondary:
        "bg-white text-green-600 border-2 border-green-500 hover:bg-green-50 focus:ring-green-500",
      outline:
        "border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 focus:ring-green-500",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          />
        )}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
