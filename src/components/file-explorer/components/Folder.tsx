import { useState } from "react";
import type { FileExplorerType } from "../types/file";

interface FolderProps {
  id: string;
  isFolder: boolean;
  name: string;
  children?: FileExplorerType[];
  handleAddNewFolder: ({
    id,
    name,
    isFolder,
  }: {
    id: string;
    name: string;
    isFolder: boolean;
  }) => void;
}

export const Folder = ({
  name,
  id,
  isFolder,
  children,
  handleAddNewFolder,
}: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [inputDetails, setInputDetails] = useState({
    isOpen: false,
    isFolder: false,
  });

  const handleOpenFolders = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateNewFolder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fileType: boolean
  ) => {
    e.stopPropagation(); // prevent btns from expanding files
    setIsOpen(true);
    setInputDetails(() => {
      return {
        isOpen: true,
        isFolder: fileType,
      };
    });
  };

  const handleClear = () => {
    setInputDetails({
      isFolder: false,
      isOpen: false,
    });
    setInputText("");
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText) {
      handleAddNewFolder({
        id,
        name: inputText,
        isFolder: inputDetails?.isFolder,
      });

      handleClear();
    }
  };

  return (
    <div className="explorer">
      <div className="explorer__container" onClick={handleOpenFolders}>
        <div className="explorer__filename">
          {isFolder && <span> {!!isOpen ? "🔻" : "🔺"}</span>}
          {isFolder ? "📒" : "📄"}
          <p>{name}</p>
        </div>
        {isFolder && (
          <div className="explorer__actions">
            <button
              className="explorer__button"
              onClick={(e) => handleCreateNewFolder(e, true)}
            >
              Folder +
            </button>
            <button
              className="explorer__button"
              onClick={(e) => handleCreateNewFolder(e, false)}
            >
              File +
            </button>
          </div>
        )}
      </div>

      <div className="explorer__folders">
        {inputDetails?.isOpen && (
          <div className="explorer__input__container">
            {inputDetails.isFolder ? "📒" : "📄"}
            <input
              className="explorer__input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              autoFocus
              onBlur={() => handleClear()}
              onKeyDown={handleSubmit}
            />
          </div>
        )}
        {isOpen &&
          children?.map((item) => (
            <Folder
              name={item?.name}
              isFolder={item?.isFolder}
              children={item?.children}
              id={item?.id}
              handleAddNewFolder={handleAddNewFolder}
              key={item?.id}
            />
          ))}
      </div>
    </div>
  );
};
