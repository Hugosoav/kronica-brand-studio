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
        
        {/* Geometric curved shapes - inspired by reference */}
        {/* Top-right curved shape */}
        <div 
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[60%]"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, transparent 60%)',
            borderRadius: '0 0 0 100%',
            opacity: 0.4,
          }}
        />
        
        {/* Bottom-left curved shape */}
        <div 
          className="absolute -bottom-[20%] -left-[15%] w-[60%] h-[50%]"
          style={{
            background: 'linear-gradient(315deg, hsl(var(--secondary)) 0%, transparent 50%)',
            borderRadius: '0 100% 0 0',
            opacity: 0.3,
          }}
        />
        
        {/* Center diagonal accent */}
        <div 
          className="absolute top-[30%] left-[20%] w-[80%] h-[40%]"
          style={{
            background: 'linear-gradient(160deg, transparent 30%, hsl(var(--muted)/0.15) 50%, transparent 70%)',
            transform: 'rotate(-5deg)',
          }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
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
