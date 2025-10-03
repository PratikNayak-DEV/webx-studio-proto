import { useState } from "react";
import EditorNavbar from "@/components/editor/EditorNavbar";
import FileExplorer from "@/components/editor/FileExplorer";
import CodeEditor from "@/components/editor/CodeEditor";
import Preview from "@/components/editor/Preview";
import Console from "@/components/editor/Console";

const Editor = () => {
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);
  const [isConsoleExpanded, setIsConsoleExpanded] = useState(false);

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
          <div className="flex-1 flex overflow-hidden">
            {/* Center - Code Editor */}
            <div className="flex-1 min-w-0 flex">
              <CodeEditor />
              
              {/* Draggable divider hint */}
              <div 
                className="w-1 bg-editor-border cursor-col-resize hover:bg-accent transition-colors"
                title="Drag to resize panels"
              />
            </div>
            
            {/* Right - Live Preview */}
            <div className="flex-1 min-w-0">
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
