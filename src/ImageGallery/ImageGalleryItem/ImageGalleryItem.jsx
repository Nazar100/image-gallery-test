import PropTypes from 'prop-types';

export default function ImageGalerryItem({ image }) {
  return <img src={image.url} alt={image.title} width="300" />;
}

ImageGalerryItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
