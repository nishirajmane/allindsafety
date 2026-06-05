import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 flex flex-col ${align === "center" ? "mx-auto text-center items-center" : "text-left items-start"} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-heading tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4 animate-pulse-slow">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
