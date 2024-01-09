import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Detail.module.css";
import { apiUrl } from "../url";

const Detail = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  const getDetail = async () => {
    const json = ???
  };

  useEffect(() => {
    getDetail();
    
  }, []);

  return (
    <Layout backBtn>
      <div>
        {results &&
          ???((result) => (
            <div key={???} className={???}>
              <h1 className={???}>{???}</h1>
              <img
                className={styles.???}
                src={`${???}.${???}`}
                alt={result.name}
              />

              {result.description && (
                <p className={???}>{???}</p>
              )}

              {??? > 0 && (
                <div className={styles.comics}>
                  <h2>Comics</h2>
                  <ul>
                    {???((comic) => (
                      <li key={???}>{???}</li>
                    ))}
                  </ul>
                </div>
              )}

              {??? > 0 && (
                <div className={???}>
                  <h2>Series</h2>
                  <ul>
                    {???((serie) => (
                      <li key={serie.name}>{???}</li>
                    ))}
                  </ul>
                </div>
              )}

              {??? > 0 && (
                <div className={styles.stories}>
                  <h2>Stories</h2>
                  <ul>
                    {???((story) => (
                      <li key={???}>{???}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Detail;
