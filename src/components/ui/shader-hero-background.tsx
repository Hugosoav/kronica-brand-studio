import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "@/hooks/use-theme";

const DARK_COLORS = ["#000000", "#080808", "#141414", "#1e1e1e"];
const LIGHT_COLORS = ["#ffffff", "#f2f2f2", "#e6e6e6", "#d9d9d9"];

export default function ShaderHeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MeshGradient
        key={theme}
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        distortion={0.8}
        speed={0.25}
        swirl={0.7}
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
