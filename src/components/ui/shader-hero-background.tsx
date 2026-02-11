import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "@/hooks/use-theme";

const DARK_COLORS = ["#000000", "#0a0a0a", "#1a1a1a", "#2a2a2a"];
const LIGHT_COLORS = ["#ffffff", "#eeeeee", "#dddddd", "#cccccc"];

export default function ShaderHeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MeshGradient
        key={theme}
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        distortion={1.2}
        speed={0.4}
        swirl={1.0}
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
