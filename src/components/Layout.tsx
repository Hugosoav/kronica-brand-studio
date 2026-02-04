import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "@/hooks/use-theme";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global modern background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-background transition-colors duration-500" />
        
        {/* Gradient orb - top right */}
        <div 
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full transition-opacity duration-500"
          style={{
            background: theme === "dark" 
              ? 'radial-gradient(ellipse, rgba(50,50,50,0.5) 0%, transparent 60%)'
              : 'radial-gradient(ellipse, rgba(200,200,200,0.4) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Gradient orb - bottom left */}
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full transition-opacity duration-500"
          style={{
            background: theme === "dark"
              ? 'radial-gradient(ellipse, rgba(40,40,40,0.4) 0%, transparent 55%)'
              : 'radial-gradient(ellipse, rgba(180,180,180,0.3) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Center glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] transition-opacity duration-500"
          style={{
            background: theme === "dark"
              ? 'radial-gradient(ellipse, rgba(60,60,60,0.2) 0%, transparent 50%)'
              : 'radial-gradient(ellipse, rgba(220,220,220,0.3) 0%, transparent 50%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Noise texture */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: theme === "dark" ? 0.015 : 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: theme === "dark"
              ? 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
              : 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.2) 100%)',
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
