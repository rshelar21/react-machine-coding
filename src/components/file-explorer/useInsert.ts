import type { FileExplorer } from "./types";

const useInsert = () => {
  function insertNode(
    folders: FileExplorer[],
    folderId: string,
    fileName: string,
    isFolder: boolean
  ) {
    // check first
    const isFirst = folders[0];
    if (isFirst.id === folderId && isFirst.isFolder) {
      isFirst.children?.unshift({
        id: `${new Date().getDate()}`,
        name: fileName,
        isFolder: isFolder,
        children: [],
      });

      return [isFirst];
    }

    const foundItem = isFirst?.children?.find((item) => item?.id === folderId);

    if (foundItem) {
      foundItem.children?.unshift({
        id: `${new Date().getDate()}`,
        name: fileName,
        isFolder: isFolder,
        children: [],
      });
    }

    return folders;
  }

  //   function updateFileName(
  //     folders: FileExplorer[],
  //     folderId: string,
  //     fileName: string,
  //     isFolder: boolean
  //   ) {
  //     const isFirst = folders[0];
  //     if (isFirst.id === folderId) {
  //       isFirst.children?.unshift({
  //         id: `${new Date().getDate()}`,
  //         name: fileName,
  //         isFolder: isFolder,
  //         children: [],
  //       });

  //       return [isFirst];
  //     }
  //   }

  return {
    insertNode,
    // updateFileName,
  };
};

export default useInsert;
