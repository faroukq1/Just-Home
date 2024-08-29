import { useSearchParams } from "react-router-dom";

const useModifyParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParams = (key: string, value: any) => {
    setSearchParams((prev): any => {
      prev.set(key, value);
    });
  };
  return { updateQueryParams };
};

export default useModifyParams;
