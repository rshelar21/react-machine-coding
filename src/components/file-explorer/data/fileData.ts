import type { FileExplorerType } from "../types/file";

export const data: FileExplorerType[] = [
  {
    id: "1",
    isFolder: true,
    name: "root",
    children: [
      {
        id: "2",
        name: "public",
        isFolder: true,
        children: [
          {
            id: "3",
            name: "public nested 1",
            isFolder: true,
            children: [
              {
                id: "4",
                name: "index.html",
                isFolder: false,
              },
              {
                id: "5",
                name: "hello.txt",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        id: "6",
        name: "src",
        isFolder: true,
        children: [],
      },
      {
        id: "7",
        name: "app",
        isFolder: true,
        children: [],
      },
    ],
  },
];
