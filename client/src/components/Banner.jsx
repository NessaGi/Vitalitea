import PropTypes from "prop-types";
import '../styles/banner.css'; 

function Banner({ title, imageUrl }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  );
}
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default Banner;
