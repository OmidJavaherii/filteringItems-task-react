import { useFilterStore } from "../store/filterStore";

interface Props {
  filterId: number;
  option: {
    OptionID: number;
    OptionName: string;
  };
}

function OptionCheckbox({ filterId, option }: Props) {
  const { selectedFilters, toggleOption } = useFilterStore();
  const isChecked = selectedFilters[filterId]?.includes(option.OptionID) ?? false;

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleOption(filterId, option.OptionID)}
      />
      {option.OptionName}
    </label>
  );
}

export default OptionCheckbox;
