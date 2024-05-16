import styles from "../../../styles/customNews.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.articleHeader}>
        <h2 className={styles.articleKeyword}>#Stocks</h2>
        <button className={styles.articleButton}>Expand</button>
      </div>
      <div className={styles.articleFeed}>
        <ul className={styles.articleList}>
          {/* .map function when we fetch data from API 
            turn LI  into a component and run through map*/}
          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>

          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>
          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>Lorem Ipsum </h2>
                <h3 className={styles.articleCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className={styles.articleSourceName}>Mbusa.com</p>
                <p className={styles.articleSourceDate}>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
