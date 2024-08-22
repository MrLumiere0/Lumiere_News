import styles from "../../../styles/modal.module.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchResult } from "../logic/search-context";
import { useContext } from "react";

export default function SearchModal({ onClick, onCancel }) {
  const router = useRouter();

  const { searchUrl, setSearchUrl } = useContext(SearchResult);
  // const { sort, setSort } = useContext(SearchResult);
  const { searchkeyword, setKeyword } = useContext(SearchResult);
  const { date, setDate } = useContext(SearchResult);
  const { selectedOption, setSelectedOption } = useContext(SearchResult);

  // keyword State and logic
  // const [keyword, setKeyword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNewKeyword = (input) => {
    try {
      console.log(input);
      setKeyword(input);
    } catch {
      console.log("error");
    }
  };

  // Range state and logic
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [showRange, setShowRange] = useState(false);
  const [isRangeSelected, setIsRangeSelected] = useState(false);

  const handleRangeChange = (ranges) => {
    try {
      setRange(ranges.selection);
      setIsRangeSelected(true);
    } catch {
      console.log("Could not get date");
    }
  };

  const handleShowRangeClick = () => {
    setShowRange((prev) => !prev);
  };

  // Select/Options State and Logic

  // const [selectedOptions, setSelectedOptions] = useState("publishedAt");

  const handleSelectOptions = (option) => {
    // setSelectedOption(option.value);
    // setSort(option.name);
    setSelectedOption(option);
    // console.log(sort);
    console.log(option);
  };

  //  url
  // const [url, SetUrl] = useState(
  //   "https://newsapi.org/v2/everything?" +
  //     "q=" +
  //     keyword +
  //     "&" +
  //     `${
  //       isRangeSelected
  //         ? "from=" +
  //           `${format(range.startDate, "yyyy-MM-dd")}` +
  //           "&" +
  //           "to=" +
  //           `${format(range.endDate, "yyyy-MM-dd")}`
  //         : ""
  //     }` +
  //     "sortBy=" +
  //     selectedOptions +
  //     "&" +
  //     "apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
  // );

  useEffect(() => {
    const updateURL = () => {
      const update = () => {
        setSearchUrl(
          "https://newsapi.org/v2/everything?" +
            "q=" +
            searchkeyword +
            "&" +
            `${
              isRangeSelected
                ? "from=" +
                  `${format(date.startDate, "yyyy-MM-dd")}` +
                  "&" +
                  "to=" +
                  `${format(date.endDate, "yyyy-MM-dd")}`
                : ""
            }` +
            "sortBy=" +
            selectedOption +
            "&" +
            "apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
        );
        setDate(range);
        console.log(searchUrl);
      };
      update();
    };
    updateURL();
  }),
    [];

  const submitForm = (event) => {
    event.preventDefault();

    if (!searchkeyword.trim()) {
      validationErrors.searchkeyword = "Keyword is required";
      setErrors(validationErrors);
    } else if (searchkeyword.trim()) {
      onClick();
      router.push("/news/search/results");
    } else
      (error) => {
        console.log("error");
      };
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={submitForm}>
        <input
          type='keyword'
          placeholder='Search headlines...'
          onChange={(e) => handleNewKeyword(e.target.value)}
          className={styles.keyword}
          autoFocus
        />
        {errors.searchkeyword && (
          <span className={styles.error}>{errors.searchkeyword}</span>
        )}
        <p onClick={handleShowRangeClick} className={styles.dateRange}>
          {isRangeSelected ? (
            `${format(range.startDate, "yyyy-MM-dd")} to ${format(
              range.endDate,
              "yyyy-MM-dd"
            )}`
          ) : (
            <SlCalender />
          )}
        </p>
        <div className={styles.calender}>
          {showRange && (
            <DateRange
              ranges={[range]}
              onChange={handleRangeChange}
              maxDate={new Date()}
            />
          )}
        </div>

        <div className={styles.selectDiv}>
          <label for='sort-select' className={styles.labelSelect}>
            Sort By:
          </label>
          <select
            name='sort'
            className={styles.select}
            onChange={(e) => handleSelectOptions(e.target.value, e.target)}
          >
            {/* <option value=''>Optional</option> */}
            <option name='Newest' value='publishedAt'>
              Newest
            </option>
            <option name='Relevancy' value='relevancy'>
              Relevancy
            </option>
            <option name='Popularity' value='popularity'>
              Popularity
            </option>
          </select>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.buttonCancel}
            onClick={() => onCancel(searchkeyword)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonSubmit}
            onSubmit={() => {
              onClick(searchkeyword);
            }}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
