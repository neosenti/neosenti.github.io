"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Radar,
  Target,
  Heart,
  Award,
  Users,
  Lightbulb,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { translations, type Language } from "@/lib/translations";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Product } from "@/components/sections/product";
import { Contact } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";

export default function NeoSentiLanding() {
  const [language, setLanguage] = useState<Language>("pt");
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const getIcon = (iconName: string) => {
    const icons = {
      lightbulb: Lightbulb,
      heart: Heart,
      award: Award,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Award;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header
        language={language}
        //@ts-expect-error translations is a record of translations
        translations={t}
        onLanguageToggle={toggleLanguage}
      />

      <Hero
        //@ts-expect-error translations is a record of translations
        translations={t}
        isVisible={isVisible}
      />

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-2xl text-slate-600 font-medium mb-8">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              {t.about.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-lg">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-slate-700 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {t.about.mission.title}
                  </h3>
                  <p className="text-slate-600">
                    {t.about.mission.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
                <CardContent className="p-8">
                  <Star className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {t.about.vision.title}
                  </h3>
                  <p className="text-slate-600">{t.about.vision.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.about.values.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{getIcon(value.icon)}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Product
        //@ts-expect-error translations is a record of translations
        translations={t}
      />

      {/* Founder Section */}
      <section id="founder" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {t.founder.title}
            </h2>
            <p className="text-2xl text-slate-600 font-medium mb-8">
              {t.founder.subtitle}
            </p>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-xl mb-12">
              <CardContent className="p-12">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {t.founder.description}
                </p>

                <blockquote className="text-xl italic text-slate-700 mb-8 border-l-4 border-slate-400 pl-6 bg-white/60 rounded-r-lg py-4">
                  "{t.founder.quote}"
                </blockquote>

                <div className="grid md:grid-cols-2 gap-4">
                  {t.founder.expertise.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-slate-700 bg-white/60 rounded-lg p-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    className="bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-lg px-8 py-4 h-auto shadow-lg"
                    onClick={() =>
                      window.open("https://your-portfolio-url.com", "_blank")
                    }
                  >
                    {language === "pt" ? "Ver Portfólio" : "View Portfolio"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-24 px-6 bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {t.mission.title}
            </h2>
            <p className="text-2xl text-slate-600 font-medium mb-12">
              {t.mission.subtitle}
            </p>

            <p className="text-lg text-slate-600 mb-16 leading-relaxed">
              {t.mission.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {t.mission.goals.map((goal, index) => (
                <Card
                  key={index}
                  className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-slate-700 font-medium">{goal}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact
        //@ts-expect-error translations is a record of translations
        translations={t}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Radar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeoSenti
                </span>
                <div className="text-xs text-blue-300">
                  Brazilian Innovation
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">{t.footer.tagline}</p>
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} NeoSenti. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
