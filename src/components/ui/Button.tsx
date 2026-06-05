"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] border border-transparent glow-btn",
      secondary:
        "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 shadow-md",
      accent:
        "bg-accent hover:bg-amber-600 text-dark shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] border border-transparent",
      outline:
        "bg-transparent border border-secondary/40 hover:border-secondary hover:bg-secondary/10 text-secondary-light transition-all",
      ghost:
        "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    };

    const content = (
      <>
        {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
