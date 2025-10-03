import { FileCode, FileText, Plus, ChevronDown, ChevronRight, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useState } from "react";

interface FileItem {
  name: string;
  type: "html" | "css" | "js";
  active?: boolean;
}

const files: FileItem[] = [
  { name: "index.html", type: "html", active: true },
  { name: "style.css", type: "css" },
  { name: "script.js", type: "js" },
];

const FileExplorer = ({ 
  isCollapsed, 
  onToggleCollapse 
}: { 
  isCollapsed: boolean; 
  onToggleCollapse: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getFileIcon = (type: string) => {
    switch (type) {
      case "html":
        return <FileCode className="w-4 h-4 text-orange-500" />;
      case "css":
        return <FileText className="w-4 h-4 text-blue-500" />;
      case "js":
        return <FileCode className="w-4 h-4 text-yellow-500" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  if (isCollapsed) {
    return (
      <div 
        id="file-tree"
        className="w-12 border-r border-editor-border bg-sidebar-background flex flex-col items-center py-4 gap-2"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          aria-label="Expand file explorer"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
        <div className="flex flex-col gap-2 mt-4">
          {files.map((file) => (
            <div key={file.name} className="p-2">
              {getFileIcon(file.type)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <aside 
      id="file-tree"
      className="w-64 border-r border-editor-border bg-sidebar-background flex flex-col"
    >
      {/* Header */}
      <div className="h-10 border-b border-sidebar-border flex items-center justify-between px-3">
        <span className="text-sm font-medium">Files</span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            aria-label="New file"
          >
            <Plus className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={onToggleCollapse}
            aria-label="Collapse file explorer"
          >
            <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          </Button>
        </div>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm hover:bg-sidebar-accent w-full px-2 py-1 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
            <span>Project</span>
          </button>

          {isExpanded && (
            <div className="ml-4 space-y-1">
              {/* Commented ID for dev wiring: #file-tree */}
              {files.map((file) => (
                <ContextMenu key={file.name}>
                  <ContextMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-2 text-sm w-full px-2 py-1.5 rounded hover:bg-sidebar-accent ${
                        file.active ? "bg-sidebar-accent" : ""
                      }`}
                    >
                      {getFileIcon(file.type)}
                      <span className="truncate">{file.name}</span>
                      {file.active && (
                        <span className="ml-auto text-xs text-muted-foreground">•</span>
                      )}
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-48">
                    <ContextMenuItem 
                      className="gap-2"
                      onClick={() => {
                        const newName = prompt("Enter new name:", file.name);
                        if (newName) {
                          console.log(`Rename ${file.name} to ${newName}`);
                        }
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Rename</span>
                    </ContextMenuItem>
                    <ContextMenuItem 
                      className="gap-2 text-destructive focus:text-destructive"
                      onClick={() => {
                        if (confirm(`Delete ${file.name}?`)) {
                          console.log(`Delete ${file.name}`);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 px-2">
          Right-click for rename/delete
        </p>
      </div>
    </aside>
  );
};

export default FileExplorer;
