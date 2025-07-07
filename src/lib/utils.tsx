import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Lightbulb, Heart, Award, Waves, Cpu, Shield, Zap } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIcon(iconName: string) {
  const icons = {
    lightbulb: Lightbulb,
    heart: Heart,
    award: Award,
    waves: Waves,
    cpu: Cpu,
    shield: Shield,
    zap: Zap,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || Zap;
  return <IconComponent className="w-6 h-6" />;
}
