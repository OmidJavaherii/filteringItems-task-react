import { useFilterStore } from "../store/filterStore";

interface Props {
  categories: { CategoryID: number; CategoryName: string }[];
}

function CategoryFilter({ categories }: Props) {
  const { selectedCategoryId, setCategory } = useFilterStore();

  return (
    <div className="flex flex-col gap-2 p-3">
      {categories.map((cat) => (
        <label key={cat.CategoryID} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedCategoryId === cat.CategoryID}
            onChange={() => setCategory(selectedCategoryId === cat.CategoryID ? null : cat.CategoryID)}
          />
          {cat.CategoryName}
        </label>
      ))}
      
    </div>
  );
}

export default CategoryFilter;
