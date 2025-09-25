// interface IFile {
//   id: string;
//   isFolder: boolean;
//   name: string;
// }

// interface File {
//   id: string;
//   isFolder: boolean;
//   name: string;
//   children?: File[];
// }

// export interface FileExplorer {
//   id: string;
//   isFolder: boolean;
//   name: string;
//   children?: File[];
// }
export interface File {
  id: string;
  isFolder: boolean;
  name: string;
  children?: File[];
}

export type FileExplorer = File;