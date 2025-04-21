import OptionCheckbox from "./OptionCheckbox";

interface Filter {
  FilterID: number;
  FilterName: string;
  Options: {
    OptionID: number;
    OptionName: string;
  }[];
}

interface Props {
  filter: Filter;
}

function FilterGroup({ filter }: Props) {
  return (
    <div className="px-3 py-5">
      <h2 className="font-semibold mb-2">{filter.FilterName}</h2>
      <div className="flex flex-col gap-1">
        {filter.Options.map((opt) => (
          <OptionCheckbox
            key={opt.OptionID}
            filterId={filter.FilterID}
            option={opt}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
