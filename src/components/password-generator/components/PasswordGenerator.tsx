import { useState } from "react";
import { Checkbox } from "./Checkbox";
import type { CheckboxType } from "../types";
import "../style.css";

const checkboxData: CheckboxType[] = [
  {
    title: "Select Uppercase",
    id: "uppercase",
  },
  {
    title: "Select Lowercase",
    id: "lowercase",
  },
  {
    title: "Select Numbers",
    id: "numbers",
  },
  {
    title: "Select Symbols",
    id: "symbols",
  },
];

export const PasswordGenerator = () => {
  const [newPassword, setNewPassword] = useState("");
  const [passwordDetails, setPasswordDetails] = useState<{
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }>({
    length: 8,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPassword = () => {
    window.navigator.clipboard.writeText(newPassword);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  const handleSetInput = (
    type: keyof typeof passwordDetails,
    value: boolean | number
  ) => {
    setPasswordDetails((prev) => {
      return {
        ...prev,
        [type]: type === "length" ? value : !passwordDetails[type],
      };
    });
  };

  const handleCreatePassword = () => {
    let charset = "";
    let generatedPassword = "";

    setErrorMsg("");

    if (passwordDetails.uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordDetails.lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordDetails.numbers) {
      charset += "0123456789";
    }
    if (passwordDetails.symbols) {
      charset += "!@#$%^&*()+_";
    }

    if (!charset) {
      setErrorMsg("Please Select at least uppercase");
      return;
    }

    for (let index = 0; index < passwordDetails.length; index++) {
      generatedPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setNewPassword(generatedPassword);
  };

  return (
    <div className="password">
      <div className="password__card">
        <div className="card__header">
          <div className="header__text">{newPassword}</div>
          <button
            onClick={handleCopyPassword}
            className="password__copy"
            disabled={!newPassword}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="password__container">
          <div className="password__characters">
            <div className="characters__heading">
              <h5>Character Length</h5>
              <p>{passwordDetails.length}</p>
            </div>
            <div>
              <input
                id="length"
                name="length"
                type="range"
                min={1}
                max={12}
                className="password__input"
                onChange={(e) =>
                  handleSetInput(
                    e.target.name as CheckboxType["id"],
                    Number(e.target.value)
                  )
                }
              />
            </div>
          </div>

          <div className="password__checkboxes">
            {checkboxData?.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                onSetInput={handleSetInput}
                id={checkbox.id}
                title={checkbox.title}
                isChecked={passwordDetails[checkbox.id]}
              />
            ))}
          </div>
        </div>
        {errorMsg && <p className="password__error">{errorMsg}</p>}
        <button onClick={handleCreatePassword} className="password__button">
          Generate Password
        </button>
      </div>
    </div>
  );
};
