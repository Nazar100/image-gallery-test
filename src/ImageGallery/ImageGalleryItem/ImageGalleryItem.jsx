import PropTypes from 'prop-types';

import './ImageGalleryItem.scss';

export default function ImageGalerryItem({ photo }) {
  return <img src={photo.url} alt={photo.title} className="image" />;
}

ImageGalerryItem.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
