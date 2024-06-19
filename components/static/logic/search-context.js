import { useState } from "react";
import { createContext } from "react";

export const SearchResult = createContext();

function SearchContext({ children }) {
  const [searchUrl, setSearchUrl] = useState("");

  return (
    <SearchResult.Provider value={{ searchUrl, setSearchUrl }}>
      {children}
    </SearchResult.Provider>
  );
}

export default SearchContext;
