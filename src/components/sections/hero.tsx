"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ArrowRight, Eye } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"

interface HeroProps {
  translations: TranslationKey
  isVisible: boolean
}

export function Hero({ translations, isVisible }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300 text-blue-700 px-6 py-3 text-sm font-semibold">
            <Award className="w-4 h-4 mr-2" />
            {translations.hero.badge}
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {translations.hero.tagline}
            </span>
            <br />
            <span className="text-slate-800">{translations.hero.subtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {translations.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto shadow-lg"
            >
              {translations.hero.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4 h-auto bg-transparent"
            >
              {translations.hero.secondary}
              <Eye className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.values(translations.hero.stats).map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {index === 0 && "🏆"}
                  {index === 1 && "1000+"}
                  {index === 2 && "📡"}
                </div>
                <div className="text-slate-600 font-medium">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
