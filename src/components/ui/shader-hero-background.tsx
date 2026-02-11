import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "@/hooks/use-theme";

const DARK_COLORS = ["#000000", "#111111", "#222222", "#333333"];
const LIGHT_COLORS = ["#ffffff", "#f0f0f0", "#e0e0e0", "#d5d5d5"];

export default function ShaderHeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MeshGradient
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        distortion={0.8}
        speed={0.25}
        swirl={0.8}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Overlay for text legibility */}
      <div className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-white/10"}`} />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,0.4) 100%)",
        }}
      />
    </div>
  );
}
