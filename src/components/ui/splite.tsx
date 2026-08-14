"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { Application } from "@splinetool/runtime";
import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="loader" />
    </div>
  ),
});

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: (splineApp: Application) => void;
}

function paintClear(app: Application) {
  // Alpha 0 so the page surface shows through empty pixels
  app.setBackgroundColor("rgba(0, 0, 0, 0)");
  app.canvas.style.backgroundColor = "transparent";
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const [ready, setReady] = useState(false);

  return (
    <div className={cn("relative h-full w-full bg-transparent", className)}>
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent">
          <span className="loader" />
        </div>
      )}
      <Spline
        scene={scene}
        className="h-full w-full bg-transparent"
        style={{ background: "transparent" }}
        renderOnDemand={false}
        wasmPath="/spline/wasm/"
        onLoad={(app) => {
          paintClear(app);

          (
            window as Window & { __fumboSpline?: Application }
          ).__fumboSpline = app;

          requestAnimationFrame(() => {
            paintClear(app);
            window.dispatchEvent(new Event("resize"));
          });
          setTimeout(() => paintClear(app), 200);

          setReady(true);
          onLoad?.(app);
        }}
      />
    </div>
  );
}
