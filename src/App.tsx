// src/App.tsx

import React, { useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import fileSystem from "./data/fileData";
import FileViewer from "./components/FileViewer";
import { FileNode } from "./types";
function App() {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);

  const handleFileSelect = (evt: any, file: FileNode) => {
    if (evt) {
      evt.stopPropagation();
    }
    setSelectedFileId(file?.id);
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <div className="container">
        <div className="explorer">
          <FileExplorer
            data={fileSystem}
            handleFileSelect={handleFileSelect}
            selectedFileId={selectedFileId}
          />
        </div>
        <FileViewer file={selectedFile} />
      </div>
    </div>
  );
}

export default App;
