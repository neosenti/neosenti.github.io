"use client"

export function FloatingElements() {
  return (
    <>
      {/* Global floating elements - more subtle */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-300/40 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-purple-300/30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-blue-200/25 rounded-full animate-float-medium"></div>
      </div>
    </>
  )
}
