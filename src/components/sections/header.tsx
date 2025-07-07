"use client";

import { Button } from "@/components/ui/button";
import { Radar, Languages, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import type { Language, TranslationKey } from "@/lib/translations";

interface HeaderProps {
  language: Language;
  translations: TranslationKey;
  onLanguageToggle: () => void;
}

export function Header({
  language,
  translations,
  onLanguageToggle,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-xl border-b z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 border-slate-200 shadow-lg"
          : "bg-white/90 border-slate-100 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          {/* <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Radar className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div> */}
          <div>
            <img src="/logo_long.svg" alt="BIA Radar" className="h-12 w-auto" />
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NeoSenti
            </span> */}
            {/* <div className="text-xs text-blue-600 font-medium">
              Brazilian Innovation
            </div> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {Object.entries(translations.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative group font-medium cursor-pointer"
            >
              {value}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>

        {/* Language Toggle */}
        <Button
          variant="outline"
          onClick={onLanguageToggle}
          className="hidden lg:flex bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-slate-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 font-medium px-4 py-2 cursor-pointer"
        >
          <Languages className="w-4 h-4 mr-2" />
          <div className="flex flex-col items-start text-xs leading-tight">
            <span className="font-semibold">
              {translations.language.current}
            </span>
            <span className="text-slate-500">
              {translations.language.switch}
            </span>
          </div>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {Object.entries(translations.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="block w-full text-left text-slate-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {value}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <Button
                variant="outline"
                onClick={onLanguageToggle}
                className="w-full bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-slate-700"
              >
                <Languages className="w-4 h-4 mr-2" />
                {translations.language.switch}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
