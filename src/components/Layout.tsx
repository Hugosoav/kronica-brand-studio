import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Modern editorial background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base solid */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Organic flowing gradient - top */}
        <div 
          className="absolute -top-[20%] left-[10%] w-[80%] h-[60%] rounded-full opacity-[0.035]"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at center, hsl(var(--foreground)) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: 'rotate(-12deg)',
          }}
        />
        
        {/* Accent glow - right side */}
        <div 
          className="absolute top-[30%] -right-[10%] w-[40%] h-[50%] rounded-full opacity-[0.025]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Bottom ambient */}
        <div 
          className="absolute -bottom-[15%] left-[20%] w-[60%] h-[40%] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at center, hsl(var(--foreground)) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />
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
