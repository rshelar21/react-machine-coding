import { data } from "./data";
import "./style.css";
import { Folder } from "./Folder";
import { useState } from "react";
import useInsert from "./useInsert";
import type { FileExplorerType } from "./types";

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
