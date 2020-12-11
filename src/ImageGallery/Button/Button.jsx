import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './Button.scss';

export default function ButtonLoader({ loadMorePhotos }) {
  return (
    <div>
      <Button
        onClick={loadMorePhotos}
        variant="contained"
        color="primary"
        className="button"
      >
        Show more
      </Button>
    </div>
  );
}

ButtonLoader.propTypes = {
  loadMorePhotos: PropTypes.func.isRequired,
};
