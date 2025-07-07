"use client"

interface SectionBackgroundProps {
  variant: "dots" | "grid" | "waves" | "texture" | "gradient-mesh"
  className?: string
}

export function SectionBackground({ variant, className = "" }: SectionBackgroundProps) {
  const backgrounds = {
    dots: (
      <div className={`absolute inset-0 opacity-30 ${className}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />
      </div>
    ),
    grid: (
      <div className={`absolute inset-0 opacity-20 ${className}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    ),
    waves: (
      <div className={`absolute inset-0 opacity-25 ${className}`}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient)"
            className="animate-float-slower"
          />
          <path
            d="M0,500 C300,400 600,600 900,500 C1050,450 1150,550 1200,500 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            className="animate-float-slow"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    texture: (
      <div className={`absolute inset-0 opacity-40 ${className}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.6'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='0' cy='30' r='1'/%3E%3Ccircle cx='60' cy='30' r='1'/%3E%3Ccircle cx='30' cy='0' r='1'/%3E%3Ccircle cx='30' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    ),
    "gradient-mesh": (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-400/5 rounded-full blur-3xl animate-float-medium"></div>
      </div>
    ),
  }

  return backgrounds[variant] || null
}
