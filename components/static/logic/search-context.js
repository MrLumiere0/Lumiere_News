import { useState } from "react";
import { createContext } from "react";

export const SearchResult = createContext();

function SearchContext({ children }) {
  const [searchUrl, setSearchUrl] = useState("");

  // keyword State and logic
  const [searchkeyword, setKeyword] = useState("");

  // Range state and logic
  const [date, setDate] = useState("");

  // Select/Options State and Logic

  const [selectedOption, setSelectedOption] = useState("publishedAt");
  const [sort, setSort] = useState("Newest");

  return (
    <SearchResult.Provider
      value={{
        searchkeyword,
        setKeyword,
        searchUrl,
        setSearchUrl,
        date,
        setDate,
        sort,
        setSort,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </SearchResult.Provider>
  );
}

export default SearchContext;
