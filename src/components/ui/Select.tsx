"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  placeholder = "Select...",
  options,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) {
            setSearchQuery("");
          }
        }}
        className="w-full flex items-center justify-between py-2 px-3 bg-white border border-slate-200 rounded-lg text-slate-800 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-left shadow-sm cursor-pointer select-none active:scale-[0.99]"
      >
        <span className={selectedOption ? "text-slate-900" : "text-slate-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-lg max-h-56 overflow-y-auto p-1 font-sans text-xs focus:outline-none scrollbar-thin"
          >
            {/* Search Input */}
            <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-slate-100">
              <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
                placeholder="Search..."
                className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-sans"
              />
            </div>

            <div className="flex flex-col gap-0.5 mt-1 max-h-40 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onValueChange(opt.value);
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className={`w-full text-left py-2 px-2.5 rounded-md transition-colors cursor-pointer select-none font-medium ${
                        isSelected
                          ? "bg-primary/10 text-primary"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-3 text-slate-400 text-[11px] font-sans">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
