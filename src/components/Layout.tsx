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
        {/* Base gradient */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Soft ambient glow - top right */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Soft ambient glow - bottom left */}
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
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
