// تبدیل selectedFilters به query string
export function buildURLParams(
    categoryId: number | null,
    selectedFilters: Record<number, number[]>
  ) {
    const params = new URLSearchParams();
  
    if (categoryId) {
      params.set("category", categoryId.toString());
    }
  
    const filters: string[] = [];
    for (const [filterId, optionIds] of Object.entries(selectedFilters)) {
      if (optionIds.length > 0) {
        filters.push(`${filterId}:${optionIds.join(",")}`);
      }
    }
  
    if (filters.length > 0) {
      params.set("filters", filters.join(";"));
    }
  
    return params;
  }
  
  // تبدیل query string به selectedFilters
  export function parseURLFilters(filtersParam: string | null): Record<number, number[]> {
    if (!filtersParam) return {};
  
    const result: Record<number, number[]> = {};
  
    filtersParam.split(";").forEach((pair) => {
      const [filterId, optionList] = pair.split(":");
      if (filterId && optionList) {
        const options = optionList.split(",").map(Number);
        result[Number(filterId)] = options;
      }
    });
  
    return result;
  }
  