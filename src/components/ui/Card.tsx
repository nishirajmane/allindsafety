"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  glowEffect = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl glass-panel p-6 transition-all duration-300
        ${hoverEffect ? "glass-panel-hover" : ""}
        ${glowEffect ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-secondary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Glow Border Effect */}
      {glowEffect && (
        <div className="absolute inset-0 border border-secondary/10 hover:border-secondary/30 rounded-2xl pointer-events-none transition-colors duration-300" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
