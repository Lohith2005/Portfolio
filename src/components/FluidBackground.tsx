import React from "react";

export function FluidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 dark:hidden">
      {/* Blob 1: Dark Royal Blue morphing blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.04] blur-[20px] animate-fluid-1"></div>
      
      {/* Blob 2: Deep Indigo morphing blob */}
      <div className="absolute top-[15%] right-[-15%] w-[55vw] h-[55vw] bg-indigo-600/[0.03] blur-[20px] animate-fluid-2" style={{ animationDelay: '-5s' }}></div>
      
      {/* Blob 3: Dark Violet morphing blob */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[65vw] h-[65vw] bg-purple-700/[0.03] blur-[20px] animate-fluid-3" style={{ animationDelay: '-10s' }}></div>

      {/* Blob 4: Slate Blue morphing blob */}
      <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-blue-800/[0.02] blur-[20px] animate-fluid-4" style={{ animationDelay: '-15s' }}></div>
    </div>
  );
}
