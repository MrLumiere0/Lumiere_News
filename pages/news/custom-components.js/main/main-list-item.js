import styles from "../../../../styles/customNews.module.css";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import car from "../../../../public/src/AMGGT63S.jpeg";
import ks from "../../../../public/src/kj.webp";
import bill from "../../../../public/src/bill.jpg";

export default function MainListItem({ ...headline }) {
  // let date = headline.publishedAt;
  // date = date.substr(0, 10);

  return (
    <li className={styles.mainHeadline}>
      <div className={styles.mainCardDetails}>
        <div className={styles.mainImage}>
          <img className={styles.mainDynamicImage} src={headline.urlToImage} />
        </div>

        <div className={styles.mainDetails}>
          <h2 className={styles.mainCardTitle}>{headline.title} </h2>
          {/* <h3 className={styles.mainCardDescription}>Description</h3> */}
          {/* <p className={styles.mainCardContent}>content</p> */}
        </div>
      </div>
      <div className={styles.mainCardSource}>
        <div className={styles.mainSource}>
          <p className={styles.sourceName}>{headline.source.name}</p>
          <p className={styles.mainSourceDate}>
            <span className={styles.mainSourceCalender}>
              <SlCalender />
            </span>
            {date}
          </p>
        </div>

        <div className={styles.mainFeature}>
          <FaRegBookmark />
        </div>
      </div>
    </li>
  );
}

// <div className={styles.carouselCard}>
//   <div className={styles.cardMain}>
//     <div className={styles.carouselImage}>
//       <Image src={car} fill={true} objectFit='contain' alt='' />
//     </div>
//   </div>

//   <div className={styles.cardDetails}>
//     <div className={styles.mainDetails}>
//       <h2 className={styles.cardTitle}>{headline.title}</h2>
//       <h3 className={styles.cardDescription}>{headline.Description}</h3>
//       <p className={styles.cardContent}>{headline.content}</p>
//     </div>
//     <div className={styles.cardSource}>
//       <div className={styles.Source}>
//         <p className={styles.sourceName}>{headline.source.name}</p>
//         <p className='source-date'>
//           <span className={styles.sourceCalender}>
//             <SlCalender />
//           </span>
//           {date}
//         </p>
//       </div>

//       <div className={styles.features}>
//         <FaRegBookmark />
//       </div>
//     </div>
//   </div>
// </div>;
