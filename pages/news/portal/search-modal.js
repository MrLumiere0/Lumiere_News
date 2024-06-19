import styles from "../../../styles/modal.module.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchResult } from "../../../components/static/logic/search-context";
import { useContext } from "react";

export default function SearchModal({ onClick, onCancel }) {
  const router = useRouter();

  // keyword State and logic
  const [keyword, setKeyword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNewKeyword = (input) => {
    try {
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
    setRange(ranges.selection);
    setIsRangeSelected(true);
  };

  const handleShowRangeClick = () => {
    setShowRange((prev) => !prev);
  };

  // Select/Options State and Logic

  const [selectedOptions, setSelectedOptions] = useState("publishedAt");

  const handleSelectOptions = (option) => {
    setSelectedOptions(option);
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

  const { searchUrl, setSearchUrl } = useContext(SearchResult);

  useEffect(() => {
    const updateURL = () => {
      const update = () => {
        setSearchUrl(
          "https://newsapi.org/v2/everything?" +
            "q=" +
            keyword +
            "&" +
            `${
              isRangeSelected
                ? "from=" +
                  `${format(range.startDate, "yyyy-MM-dd")}` +
                  "&" +
                  "to=" +
                  `${format(range.endDate, "yyyy-MM-dd")}`
                : ""
            }` +
            "sortBy=" +
            selectedOptions +
            "&" +
            "apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
        );
      };

      update();
      // console.log(keyword);
      console.log(searchUrl);
    };
    updateURL();
  }),
    [];

  const submitForm = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (!keyword.trim()) {
      validationErrors.keyword = "Keyword is required";
      setErrors(validationErrors);
    } else if (keyword.trim()) {
      onClick();
      console.log(searchUrl);
      // router.push("/news/search-results");
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
        {errors.keyword && (
          <span className={styles.error}>{errors.keyword}</span>
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
            onChange={(e) => handleSelectOptions(e.target.value)}
          >
            {/* <option value=''>Optional</option> */}
            <option value='publishedAt'>Newest</option>
            <option value='relevancy'>Relevancy</option>
            <option value='popularity'>Popularity</option>
          </select>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.buttonCancel}
            onClick={() => onCancel(keyword)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonSubmit}
            onSubmit={() => {
              onClick(keyword);
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
