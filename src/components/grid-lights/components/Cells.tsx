interface Props {
  index: number;
  cell: number;
  isActive: boolean;
  onSetActive: (index: number) => void;
}

export const Cells = ({ index, cell, onSetActive, isActive }: Props) => {
  return (
    <button
      onClick={() => onSetActive(index)}
      className={
        cell === 0
          ? "grid__cell--hidden"
          : isActive
          ? "grid__cell grid__cell--active"
          : "grid__cell"
      }
      disabled={isActive}
    />
  );
};
