import styles from "../../../styles/searchResults.module.css";
import ResultListItem from "./search-result-list-item";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { SearchResult } from "../../../components/static/logic/search-context";
import { format } from "date-fns";
import { formatDate } from "date-fns";

export default function SearchResults() {
  const { searchUrl } = useContext(SearchResult);
  const { keyword } = useContext(SearchResult);
  const { date } = useContext(SearchResult);
  const { selectedOptions } = useContext(SearchResult);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data.articles);
        setResultData(data.articles);
      } catch (err) {
        console.log("error");
      }
    };

    fetchSearchResults();
  }, []);

  return (
    <div id={styles.searchResults}>
      <div className={styles.searchResultsHeader}>
        <div className={styles.result}>
          <h2 id={styles.resultsFor}>Results for: </h2>
          <div className={styles.resultItems}>
            <h2>{keyword}</h2>
            <h2>
              Date: &nbsp;
              <span className={date}>
                {formatDate(date.startDate, "MM-dd-yyyy")} to &nbsp;
                {formatDate(date.endDate, "MM-dd-yyyy")}
              </span>
            </h2>
            {/* will have an && for conditional rendering */}
            <h2>Sorted By: {selectedOptions}</h2>
            {/*will default to publishedAt or if selected*/}
          </div>
        </div>
      </div>

      <div className={styles.mainView}>
        <div className={styles.view}>
          <div className={styles.activeResult}>
            <div className={styles.activeResultController}>
              <button className={styles.buttonprev}>Prev</button>
              <button className={styles.buttonnext}>Next</button>
            </div>
            <div className={styles.imageContainer}>
              <img src='' className={styles.activeImage} />
            </div>
            <div classname={styles.activeHeader}>
              <h2 className={styles.activeTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                fermentum vulputate.
              </h2>
              {/* <h3 className={styles.mainCardDescription}>Description</h3> */}
              {/* <p className={styles.mainCardContent}>content</p> */}

              <h2 className={styles.activeDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et ornare sapien. Praesent sagittis pharetra bibendum. Etiam
                vitae metus mi. Maecenas at urna ullamcorper, posuere.
              </h2>
            </div>

            <p className={styles.activeContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              id aliquet quam. Cras consectetur fermentum magna non molestie.
              Phasellus sed luctus quam. In justo nulla, blandit quis rutrum eu,
              feugiat id tortor. Morbi lobortis vehicula mollis. Vestibulum a
              mauris faucibus, interdum eros id, congue leo. Aliquam dui sapien,
              ultricies sit amet elit et, dignissim luctus eros. Donec ut erat
              laoreet, aliquet est vitae, tempor ipsum. Quisque sit amet
              convallis nunc. Proin consectetur odio enim, accumsan tincidunt
              purus viverra nec. Fusce turpis leo, fermentum eget lorem a,
              sollicitudin efficitur dui. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
            {/* <div className={styles.activeSource}>
              <p className={styles.activeSourceDate}>
                <span className={styles.activeSourceCalender}>
                  <SlCalender />
                </span>
                date
              </p>
            </div> */}
          </div>
          <div className={styles.resultsFeed}>
            <input
              type='text'
              placeholder='Filter by keyword'
              className={styles.filterinput}
            ></input>

            <ul className={styles.resultsList}>
              {resultData.map((headline) => (
                <ResultListItem {...headline} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// We need context to bring down the setURL state to the link in the tab that. Way on onClcik registers a setURL with the new keyword and a route.push(“/search-results)  after
// We need the returned array of the API, and make it so the id is labeled on the dataset to make it easier to target

// the view has to be a state variable, the state variale will be used as a prop currentViewItem.headline, . description etc
// when you press on a news article then it should trigger an onClick function which then setTheState to the current selection
// Further updating the view

// in the context there will be seaprate url, data, and keyword, date, options state variable to be modifed and shared between components

// state for the input / keyword - filtering the articles
//state for the filtered articles - to display only the filtered articles instead of entirety of search results  only
