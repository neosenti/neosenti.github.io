"use client"

import { Button } from "@/components/ui/button"
import { Radar, Languages } from "lucide-react"
import type { Language, TranslationKey } from "@/lib/translations"

interface HeaderProps {
  language: Language
  translations: TranslationKey
  onLanguageToggle: () => void
}

export function Header({ language, translations, onLanguageToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Radar className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NeoSenti
            </span>
            <div className="text-xs text-blue-600 font-medium">Brazilian Innovation</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {Object.entries(translations.nav).map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              {value}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          onClick={onLanguageToggle}
          className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-slate-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 font-medium px-4 py-2"
        >
          <Languages className="w-4 h-4 mr-2" />
          <div className="flex flex-col items-start text-xs leading-tight">
            <span className="font-semibold">{translations.language.current}</span>
            <span className="text-slate-500">{translations.language.switch}</span>
          </div>
        </Button>
      </div>
    </header>
  )
}
