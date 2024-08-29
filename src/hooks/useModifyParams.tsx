import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useModifyParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // change url based on array of ids (queries)
  const modifyParams = (
    newParams: Record<string, string | number | (string | number)[] | null>
  ) => {
    const updatedParams = new URLSearchParams(searchParams);

    Object.keys(newParams).forEach((key) => {
      const value = newParams[key];

      if (value === null) {
        updatedParams.delete(key);
      } else if (Array.isArray(value)) {
        updatedParams.delete(key);

        value.forEach((val) => {
          updatedParams.append(key, String(val));
        });
      } else {
        updatedParams.set(key, String(value));
      }
    });

    setSearchParams(updatedParams);
  };

  // handle categories changes
  const addNewCategory = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
      return;
    }
    const newCategoriesList = selectedCategories.filter((c) => c != category);
    setSelectedCategories(newCategoriesList);
  };
  const filterCategories = () => {
    const category = selectedCategories;
    modifyParams({ category });
  };

  return { searchParams, modifyParams, addNewCategory, filterCategories };
};

export default useModifyParams;
