import { MeshGradient } from "@paper-design/shaders-react";

const DARK_GRADIENT_COLORS = ["#000000", "#0d0d0d", "#1a1a1a", "#262626"];

export default function ShaderHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <MeshGradient
        colors={DARK_GRADIENT_COLORS}
        distortion={0.6}
        speed={0.15}
        swirl={0.6}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
