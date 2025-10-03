import { X } from "lucide-react";

interface Tab {
  name: string;
  unsaved: boolean;
  content: string;
}

const tabs: Tab[] = [
  { 
    name: "index.html", 
    unsaved: true,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebX Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello WebX</h1>
  <p>Start building your web project here.</p>
  
  <script src="script.js"></script>
</body>
</html>`
  },
  { 
    name: "style.css", 
    unsaved: false,
    content: `body {
  margin: 0;
  padding: 20px;
  font-family: system-ui, sans-serif;
  background: #f8fafc;
}

h1 {
  color: #2563eb;
}`
  },
];

const CodeEditor = () => {
  const activeTab = tabs[0];

  return (
    <div className="flex flex-col flex-1 min-w-0">
      {/* Tab Bar */}
      <div className="flex items-center border-b border-editor-border bg-editor-tab overflow-x-auto">
        {/* Commented ID for dev wiring: Monaco/CodeMirror will replace #editor */}
        {tabs.map((tab, idx) => (
          <div
            key={tab.name}
            className={`flex items-center gap-2 px-4 h-10 text-sm border-r border-editor-border cursor-pointer ${
              idx === 0
                ? "bg-editor-tab-active border-b-2 border-accent"
                : "hover:bg-editor-tab-active"
            }`}
            title="Double-click to rename"
          >
            <span>{tab.name}</span>
            {tab.unsaved && <span className="text-accent">•</span>}
            <button 
              className="hover:bg-black/10 dark:hover:bg-white/10 rounded p-0.5"
              aria-label={`Close ${tab.name}`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Editor Area - Reserved for Monaco/CodeMirror */}
      <div 
        id="editor"
        className="flex-1 bg-code-bg text-code-text font-mono text-sm p-4 overflow-auto"
      >
        <pre className="whitespace-pre-wrap">{activeTab.content}</pre>
      </div>
      
      <div className="text-xs text-muted-foreground px-4 py-2 border-t border-editor-border bg-editor-tab">
        Tabs: double-click to rename • Ctrl/Cmd+S to save
      </div>
    </div>
  );
};

export default CodeEditor;
