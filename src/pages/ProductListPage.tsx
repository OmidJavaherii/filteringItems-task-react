import { useEffect, useMemo } from "react";
import productsData from "../data/products.json";
import CategoryFilter from "../components/CategoryFilter";
import FilterGroup from "../components/FilterGroup";
import ProductCard from "../components/ProductCard";
import { useFilterStore } from "../store/filterStore";
import { useSearchParams } from "react-router-dom";
import { parseURLFilters, buildURLParams } from "../utils/helpers";

function ProductListPage() {
  const { selectedCategoryId, selectedFilters, setFromURL } = useFilterStore();

  const [searchParams, setSearchParams] = useSearchParams();

  // دریافت وضعیت فیلتر از URL
  useEffect(() => {
    const categoryId = searchParams.get("category");
    const filters = parseURLFilters(searchParams.get("filters"));
    setFromURL(categoryId ? Number(categoryId) : null, filters);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return productsData.Data.Products.filter((product) => {
      if (selectedCategoryId && product.CategoryID !== selectedCategoryId)
        return false;

      for (const [filterId, optionIds] of Object.entries(selectedFilters)) {
        const filterOptions = product.Filters.filter(
          (f) => f.Filter === Number(filterId)
        ).map((f) => f.Option);

        if (!optionIds.some((opt: number) => filterOptions.includes(opt)))
          return false;
      }

      return true;
    });
  }, [selectedCategoryId, selectedFilters]);

  // بروزرسانی URL
  useEffect(() => {
    setSearchParams(buildURLParams(selectedCategoryId, selectedFilters));
  }, [selectedCategoryId, selectedFilters]);

  return (
    <div className="flex gap-4 p-4">
      <div className=" w-[20vw]">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-2 border rounded-2xl">
            <h2 className="p-2">categories</h2>
            <hr />
            <CategoryFilter categories={productsData.Data.Categories} />
          </div>
          <div className="flex flex-col gap-2 border rounded-2xl">
            <h2 className="p-2">Filters</h2>
            <hr />
            {productsData.Data.Filters.map((filter) => (
              <FilterGroup key={filter.FilterID} filter={filter} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80vw] border rounded-2xl p-5">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <hr />
          <div className="flex flex-row flex-wrap pt-5 gap-4">
            {filteredProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
