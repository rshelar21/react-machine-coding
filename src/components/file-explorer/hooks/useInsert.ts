import type { FileExplorerType } from "../types/file";

const useInsert = () => {
  function insertNode(
    folders: FileExplorerType[],
    folderId: string,
    fileName: string,
    isFolder: boolean
  ) {
    // check first
    const isFirst = folders[0];
    if (isFirst.id === folderId && isFirst.isFolder) {
      isFirst.children?.unshift({
        id: `${new Date().getTime()}`,
        name: fileName,
        isFolder: isFolder,
        children: [],
      });

      return [isFirst];
    }

    isFirst?.children?.map((item) => {
      return insertNode([item], folderId, fileName, isFolder);
    });

    return [...folders];
  }

  return {
    insertNode,
  };
};

export default useInsert;
