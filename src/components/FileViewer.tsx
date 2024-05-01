// src/components/FileViewer.tsx

import React from "react";
import { FileNode } from "../types";

interface Props {
  file: FileNode | null;
}

const FileViewer: React.FC<Props> = ({ file }) => {
  //   if (!file) return <div>Select a file to view its content.</div>;

  if (file?.meta === "img" || file?.meta === "svg") {
    return (
      <img src={file?.name} alt={file?.name} style={{ maxWidth: "100%" }} />
    );
  }

  return (
    <textarea
      value={file?.name || "File name will be displayed here"}
      readOnly
      style={{ width: "70%", height: "300px" }}
    />
  );
};

export default FileViewer;
