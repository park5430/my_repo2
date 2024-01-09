import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Detail.module.css";

function CharacterDetail({ id, thumbnail, name, comics }) {
  return (
    <div key={id}>
      <section>
        <div className={???}>
          <h1>{name}</h1>
          <img src={??? + "." + ???} alt={name} />
          <div className={???}>
            <Link to={`/`}>Back to List</Link>
          </div>
        </div>
        <div className={???}>
          <h1>
            <span role="img" aria-label="pin">
              📌
            </span>{" "}
            Related Comics
          </h1>
          <ul>
            {???((item) => (
              <li key={???}>{???}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

CharacterDetail.prototype = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired
};

export default CharacterDetail;
