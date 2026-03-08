import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "@/hooks/use-theme";

const DARK_COLORS = ["#000000", "#0d0d0d", "#222222", "#3a3a3a"];
const LIGHT_COLORS = ["#ffffff", "#e8e8e8", "#d0d0d0", "#b8b8b8"];

export default function ShaderHeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MeshGradient
        key={theme}
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        distortion={2.0}
        speed={0.7}
        swirl={1.6}
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
