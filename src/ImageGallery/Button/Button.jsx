import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './Button.scss';

export default function ButtonLoader({ loadMoreImages }) {
  return (
    <div>
      <Button
        onClick={loadMoreImages}
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
  loadMoreImages: PropTypes.func.isRequired,
};
