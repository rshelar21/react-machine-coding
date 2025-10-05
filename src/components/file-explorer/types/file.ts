export interface File {
  id: string;
  isFolder: boolean;
  name: string;
  children?: File[];
}

export type FileExplorerType = File;
