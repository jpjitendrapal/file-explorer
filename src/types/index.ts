// src/types/index.ts

export interface FileNode {
  id: number;
  type: "file" | "folder";
  name: string;
  meta?: string;
  selected?: boolean;
  data?: FileNode[];
}
