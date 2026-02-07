import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global modern minimalist background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Large sweeping curve - top right */}
        <div 
          className="absolute -top-[30%] -right-[20%] w-[90%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, hsl(var(--secondary)) 0%, transparent 65%)',
            borderRadius: '0 0 0 100%',
            opacity: 0.6,
          }}
        />

        {/* Wave-like organic shape - mid left */}
        <svg 
          className="absolute top-[15%] -left-[5%] w-[60%] h-[50%] opacity-[0.08]"
          viewBox="0 0 800 600" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 300 C150 150, 350 450, 500 250 C650 50, 750 400, 800 300 L800 600 L0 600 Z" 
            fill="hsl(var(--foreground))"
          />
        </svg>

        {/* Bottom-left large curved blob */}
        <div 
          className="absolute -bottom-[25%] -left-[20%] w-[75%] h-[65%]"
          style={{
            background: 'radial-gradient(ellipse at 30% 70%, hsl(var(--secondary)) 0%, transparent 60%)',
            borderRadius: '0 80% 0 0',
            opacity: 0.5,
          }}
        />

        {/* Flowing wave - bottom right */}
        <svg 
          className="absolute bottom-0 right-0 w-[70%] h-[40%] opacity-[0.06]"
          viewBox="0 0 800 400" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M800 400 L800 200 C700 100, 600 300, 450 180 C300 60, 150 250, 0 150 L0 400 Z" 
            fill="hsl(var(--foreground))"
          />
        </svg>

        {/* Center diagonal accent band */}
        <div 
          className="absolute top-[25%] left-[10%] w-[90%] h-[35%]"
          style={{
            background: 'linear-gradient(155deg, transparent 25%, hsl(var(--muted)/0.25) 45%, transparent 65%)',
            transform: 'rotate(-8deg)',
          }}
        />

        {/* Small floating curved accent - top left */}
        <svg 
          className="absolute top-[5%] left-[8%] w-[30%] h-[25%] opacity-[0.05]"
          viewBox="0 0 400 300" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M50 250 C100 100, 200 50, 350 80 C300 150, 200 200, 50 250 Z" 
            fill="hsl(var(--foreground))"
          />
        </svg>

        {/* Subtle arc line - decorative */}
        <svg 
          className="absolute top-[40%] right-[5%] w-[40%] h-[30%] opacity-[0.04]"
          viewBox="0 0 500 300" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 300 Q250 -50 500 300" 
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            fill="none"
          />
          <path 
            d="M50 300 Q250 20 450 300" 
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
