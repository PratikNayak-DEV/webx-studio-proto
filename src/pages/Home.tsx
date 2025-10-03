import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

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

      {/* Hero Section - Two Column Layout */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                WebX
              </h1>
              <div className="w-16 h-0.5 bg-accent" aria-hidden="true" />
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                A lightweight browser IDE for HTML, CSS and JavaScript. 
                Write code, see live previews, and export your projects instantly. 
                No setup required — start building in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/editor"
                aria-label="Get started with WebX"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-accent text-accent-foreground hover:opacity-90 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get Started
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right - UI Component Preview */}
          <div className="relative">
            <div className="bg-surface border border-border rounded-lg shadow-lg overflow-hidden">
              {/* Mock Editor Window */}
              <div className="bg-editor-tab border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">index.html</span>
              </div>
              <div className="bg-code-bg p-4 font-mono text-sm text-code-text">
                <div className="space-y-1">
                  <div className="text-muted-foreground">{'<!DOCTYPE html>'}</div>
                  <div>{'<html>'}</div>
                  <div className="ml-4">{'<head>'}</div>
                  <div className="ml-8 text-green-400">{'<title>My Project</title>'}</div>
                  <div className="ml-4">{'</head>'}</div>
                  <div className="ml-4">{'<body>'}</div>
                  <div className="ml-8 text-blue-400">{'<h1>Hello WebX!</h1>'}</div>
                  <div className="ml-4">{'</body>'}</div>
                  <div>{'</html>'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


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
