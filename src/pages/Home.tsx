import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Code2, Zap, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <nav className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Simple and Centered */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              WebX
            </h1>
            <div className="w-16 h-0.5 bg-accent mx-auto" aria-hidden="true" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A lightweight browser IDE for HTML, CSS and JavaScript — start building in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/editor"
              aria-label="Get started with WebX"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-accent text-accent-foreground hover:opacity-90 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Explore Features
            </a>
          </div>
        </div>
      </main>

      {/* Simple Features Section */}
      <section id="features" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                <Code2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Live Preview</h3>
              <p className="text-sm text-muted-foreground">
                See changes instantly as you type with automatic live preview
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-center">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">File Explorer</h3>
              <p className="text-sm text-muted-foreground">
                Organize your HTML, CSS and JavaScript files with ease
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-center">
                <Download className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Export ZIP</h3>
              <p className="text-sm text-muted-foreground">
                Download your project as a ZIP file ready to deploy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-8 px-6 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 WebX. A lightweight browser IDE prototype.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
