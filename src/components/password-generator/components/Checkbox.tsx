import type { CheckBoxIds } from "../types";

interface Props {
  id: CheckBoxIds;
  title: string;
  onSetInput: (id: CheckBoxIds, checked: boolean) => void;
  isChecked: boolean;
}

export const Checkbox = ({ id, title, onSetInput, isChecked }: Props) => {
  return (
    <div className="password__input" key={id}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          onChange={() => onSetInput(id, isChecked)}
          name={id}
          checked={isChecked}
        />
        {title}
      </label>
    </div>
  );
};
