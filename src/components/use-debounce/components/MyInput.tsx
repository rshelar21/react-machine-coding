import { useCallback, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useThrottle } from "../hooks/useThrottle";

export const MyInput = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    console.log("API Call with:", value);
  };

  const debouncedSearch = useCallback(useDebounce(handleSearch, 500), []);

  const throttleSearch = useCallback(useThrottle(handleSearch, 500), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // debouncedSearch(e.target.value, "test");
    throttleSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" name="search" value={search} onChange={handleChange} />
      {search}
    </div>
  );
};
