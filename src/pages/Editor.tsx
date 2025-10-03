import { useState, useRef, useEffect } from "react";
import EditorNavbar from "@/components/editor/EditorNavbar";
import FileExplorer from "@/components/editor/FileExplorer";
import CodeEditor from "@/components/editor/CodeEditor";
import Preview from "@/components/editor/Preview";
import Console from "@/components/editor/Console";

const Editor = () => {
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);
  const [isConsoleExpanded, setIsConsoleExpanded] = useState(false);
  const [editorWidth, setEditorWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      // Clamp between 20% and 80%
      const clampedPercentage = Math.min(Math.max(percentage, 20), 80);
      setEditorWidth(clampedPercentage);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <EditorNavbar />
      
      {/* Main 3-panel layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left - File Explorer */}
        <FileExplorer 
          isCollapsed={isExplorerCollapsed}
          onToggleCollapse={() => setIsExplorerCollapsed(!isExplorerCollapsed)}
        />
        
        {/* Center & Right - Code Editor + Preview */}
        <div className="flex-1 flex flex-col min-w-0">
          <div ref={containerRef} className="flex-1 flex overflow-hidden">
            {/* Center - Code Editor */}
            <div className="min-w-0 flex" style={{ width: `${editorWidth}%` }}>
              <CodeEditor />
              
              {/* Draggable divider */}
              <div 
                className="w-1 bg-editor-border cursor-col-resize hover:bg-accent transition-colors active:bg-accent"
                title="Drag to resize panels"
                onMouseDown={() => setIsDragging(true)}
              />
            </div>
            
            {/* Right - Live Preview */}
            <div className="min-w-0" style={{ width: `${100 - editorWidth}%` }}>
              <Preview />
            </div>
          </div>
          
          {/* Bottom - Console */}
          <Console 
            isExpanded={isConsoleExpanded}
            onToggle={() => setIsConsoleExpanded(!isConsoleExpanded)}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
