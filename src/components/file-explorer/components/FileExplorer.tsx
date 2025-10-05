import { useState } from "react";
import "../style.css";
import { data } from "../data/fileData";
import { Folder } from "../components/Folder";
import useInsert from "../hooks/useInsert";
import type { FileExplorerType } from "../types/file";

export const FileExplorer = () => {
  const [folders, setFolders] = useState<FileExplorerType[]>(data);

  const { insertNode } = useInsert();

  const handleAddNewFolder = ({
    id,
    name,
    isFolder,
  }: {
    id: string;
    name: string;
    isFolder: boolean;
  }) => {
    const newPairs = insertNode(folders, id, name, isFolder);

    setFolders(newPairs as FileExplorerType[]);
  };

  return (
    <div>
      {folders?.map((folder) => {
        return (
          <Folder
            id={folder?.id}
            isFolder={folder?.isFolder}
            name={folder?.name}
            children={folder?.children}
            key={folder?.id}
            handleAddNewFolder={handleAddNewFolder}
          />
        );
      })}
    </div>
  );
};
