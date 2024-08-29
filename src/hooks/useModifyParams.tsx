import { useSearchParams } from "react-router-dom";

const useModifyParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  return { searchParams, modifyParams };
};

export default useModifyParams;
