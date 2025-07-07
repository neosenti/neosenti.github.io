"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionBackground } from "@/components/ui/section-background";
import { Award, ChevronRight, Radar, CheckCircle } from "lucide-react";
import { BIARadarVisualization } from "@/components/3d/bia-radar-visualization";
import { getIcon } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

interface ProductProps {
  translations: TranslationKey;
}

export function Product({ translations }: ProductProps) {
  return (
    <section
      id="product"
      className="py-24 px-6 bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden"
    >
      <SectionBackground variant="waves" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection animation="fade-up">
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300 text-blue-700 px-4 py-2 font-semibold">
                <Award className="w-4 h-4 mr-2" />
                {translations.product.contest}
              </Badge>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {translations.product.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-blue-700 font-medium mb-6">
                {translations.product.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {translations.product.description}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {translations.product.features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale-up"
                  delay={800 + index * 200}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <div className="text-white">
                          {getIcon(feature.icon)}
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={1400}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto shadow-lg transform hover:scale-105 transition-all duration-300 text-white">
                {translations.product.cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-left" delay={600}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl border border-blue-200 shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
                    <Environment preset="studio" />
                    <ambientLight intensity={0.4} />
                    <pointLight
                      position={[10, 10, 10]}
                      intensity={1}
                      color="#3b82f6"
                    />
                    <pointLight
                      position={[-10, -10, -10]}
                      intensity={0.5}
                      color="#8b5cf6"
                    />
                    <BIARadarVisualization />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1}
                    />
                  </Canvas>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-blue-300">
                  <Radar className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* BIA Radar Logo positioned at bottom of 3D visualization */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-blue-200">
                  <img
                    src="/bia_logo_wide.svg"
                    alt="BIA Radar"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
