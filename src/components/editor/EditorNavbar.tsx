import { Plus, Save, Download, Sun, Moon, MoreVertical } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

const EditorNavbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="h-14 border-b border-editor-border bg-surface flex items-center px-4 gap-4">
      <Logo className="mr-4" />
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2"
          aria-label="New file"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New File</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2"
          aria-label="Save"
        >
          <Save className="w-4 h-4" />
          <span className="hidden sm:inline">Save</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2"
          aria-label="Download ZIP"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download ZIP</span>
        </Button>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDark(!isDark)}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" aria-label="More options">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              Keyboard Shortcuts
            </DropdownMenuItem>
            <DropdownMenuItem>
              About
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default EditorNavbar;
