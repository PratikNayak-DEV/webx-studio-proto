import { ChevronUp, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Console = ({ 
  isExpanded, 
  onToggle 
}: { 
  isExpanded: boolean; 
  onToggle: () => void;
}) => {
  if (!isExpanded) {
    return (
      <div 
        id="console"
        className="h-8 border-t border-editor-border bg-surface flex items-center justify-between px-3 cursor-pointer hover:bg-editor-tab"
        onClick={onToggle}
      >
        <span className="text-xs font-medium">Console</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-5 px-1"
          aria-label="Expand console"
        >
          <ChevronUp className="w-3 h-3" />
        </Button>
      </div>
    );
  }

  return (
    <div 
      id="console"
      className="h-48 border-t border-editor-border bg-surface flex flex-col"
    >
      {/* Console Header */}
      <div className="h-8 border-b border-editor-border flex items-center justify-between px-3">
        <span className="text-xs font-medium">Console</span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-5 px-2 text-xs"
            aria-label="Clear console"
          >
            Clear
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-5 px-1"
            onClick={onToggle}
            aria-label="Collapse console"
          >
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Console Output */}
      <div className="flex-1 overflow-y-auto p-2 font-mono text-xs space-y-1">
        <div className="flex gap-2">
          <span className="text-blue-500">&gt;</span>
          <span className="text-muted-foreground">console.log('Hello WebX')</span>
        </div>
        <div className="flex gap-2 pl-4">
          <span className="text-foreground">Hello WebX</span>
        </div>
        <div className="flex gap-2 text-muted-foreground">
          <span className="text-blue-500">&gt;</span>
          <span>Ready</span>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground px-3 py-1 border-t border-editor-border">
        Ctrl/Cmd+` to toggle console
      </div>
    </div>
  );
};

export default Console;
