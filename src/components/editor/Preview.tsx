import { RefreshCw, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Preview = () => {
  return (
    <div className="flex flex-col border-l border-editor-border bg-surface min-w-0">
      {/* Preview Toolbar */}
      <div className="h-10 border-b border-editor-border flex items-center justify-between px-3">
        <span className="text-sm font-medium">Live Preview</span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2"
            aria-label="Refresh preview"
          >
            <RefreshCw className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Preview iframe - Reserved for live preview */}
      <div className="flex-1 relative bg-white">
        <iframe
          id="preview-iframe"
          title="Live Preview"
          className="w-full h-full border-0"
          sandbox="allow-scripts"
          srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: system-ui, sans-serif;
      background: #f8fafc;
    }
    h1 {
      color: #2563eb;
    }
  </style>
</head>
<body>
  <h1>Hello WebX</h1>
  <p>Start building your web project here.</p>
  <script>console.log('Hello WebX')</script>
</body>
</html>`}
        />
      </div>
      
      <div className="text-xs text-muted-foreground px-3 py-2 border-t border-editor-border">
        Preview updates automatically while typing (500ms debounce)
      </div>
    </div>
  );
};

export default Preview;
