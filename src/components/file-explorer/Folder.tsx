import { useState } from "react";

interface FolderProps {
  id: string;
  isFolder: boolean;
  name: string;
  children?: {
    id: string;
    isFolder: boolean;
    name: string;
    children?: {
      id: string;
      isFolder: boolean;
      name: string;
    }[];
  }[];
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
  const [isOpen, setIsOpen] = useState<{
    [x: string]: boolean;
  }>({});
  const [inputText, setInputText] = useState<string>("");
  const [inputDetails, setInputDetails] = useState({
    isOpen: false,
    isFolder: false,
  });

  const handleOpenFolders = (idx: string) => {
    setIsOpen((prev) => {
      return {
        ...prev,
        [idx]: !prev[idx],
      };
    });
  };

  const handleCreateNewFolder = (fileType: boolean) => {
    // e.stopPropagation(); // prevent btns from expanding files
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
    if (e.key === "Enter") {
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
      <div className="explorer__container">
        <div
          className="explorer__filename"
          onClick={() => handleOpenFolders(id)}
        >
          {isFolder ? "📒" : "📄"}
          <p>{name}</p>
        </div>
        {isFolder && (
          <div className="explorer__actions">
            <button
              className="explorer__actions--btn"
              onClick={() => handleCreateNewFolder(true)}
            >
              Folder +
            </button>
            <button
              className="explorer__actions--btn"
              onClick={() => handleCreateNewFolder(false)}
            >
              File +
            </button>
          </div>
        )}
      </div>

      {!!children?.length && isOpen[id] && (
        <div className="explorer_folders">
          {inputDetails?.isOpen && (
            <div className="explorer__folders--input">
              {inputDetails.isFolder ? "📒" : "📄"}
              <input
                className="explorer__input--container"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                autoFocus
                onBlur={() => handleClear()}
                onKeyDown={handleSubmit}
              />
            </div>
          )}
          {children?.map((item) => (
            <Folder
              name={item?.name}
              isFolder={item?.isFolder}
              children={item?.children}
              id={item?.id}
              handleAddNewFolder={handleAddNewFolder}
            />
          ))}
        </div>
      )}
    </div>
  );
};
