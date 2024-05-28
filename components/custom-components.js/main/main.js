import styles from "../../../styles/customNews.module.css";
import MainListItem from "./main-list-item";
import { useEffect, useState } from "react";

export default function MainList() {
  const [searchURL, setSearchURL] = useState(
    "    https://newsapi.org/v2/everything?q=stock&pageSize=50&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
  );
  const [mainNews, setMainNews] = useState([]);
  const url = { searchURL };

  useEffect(() => {
    const fetchMainNews = async () => {
      try {
        // set back to searchURL instead of url when done w modal
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.articles);
        setMainNews(data.articles);
      } catch (err) {
        console.log("error");
      }
    };

    fetchMainNews();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <h2 className={styles.keyword}>#Economic</h2>

        <button className={styles.mainButton}>Expand</button>
      </div>

      <div className={styles.mainFeed}>
        <ul className={styles.mainList}>
          {mainNews.map((headline) => (
            <MainListItem {...headline} />
          ))}
        </ul>
      </div>
    </div>
  );
}
