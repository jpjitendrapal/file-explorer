// src/components/FileExplorer.tsx

import React, { useState } from "react";
import { FileNode } from "../types";

interface Props {
  data: FileNode;
  handleFileSelect: (evt: any, file: FileNode) => void;
  selectedFileId: number | null;
}

const FileExplorer: React.FC<Props> = ({
  data,
  handleFileSelect,
  selectedFileId,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (file: FileNode) => {
    console.log("toggle: ", isOpen, file);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data?.type === "folder" ? (
        <div className="folder">
          <div onClick={() => toggle(data)} className="cursor-pointer">
            <span className="folder-name">{data.name}</span>
            <span className={`arrow ${isOpen ? "down" : "right"}`}></span>
          </div>
          {isOpen && (
            <div className="file" style={{ paddingLeft: 24 }}>
              {data?.data?.map((child) => (
                <FileExplorer
                  key={child.id}
                  data={child}
                  handleFileSelect={handleFileSelect}
                  selectedFileId={selectedFileId}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className=""
          onClick={(e) => {
            handleFileSelect(e, data);
          }}
        >
          <span
            className={`cursor-pointer file-name " ${
              selectedFileId === data.id ? "selected" : ""
            }`}
          >
            {data.name}
          </span>
        </div>
      )}
    </>
  );
};

export default FileExplorer;
