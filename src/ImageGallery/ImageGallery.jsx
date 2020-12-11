import { Component } from 'react';

import './ImageGallery.scss';
import fetchPhotos from '../services/fetchPhotos';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

class ImageGallery extends Component {
  state = {
    photos: [],
    showedPhotos: [],
    // photosNumber indicates how many phowos should be
    photosNumber: 10,
  };

  // here we get photos from the fetch and set them in state 'photos'

  componentDidMount() {
    fetchPhotos().then(response => {
      this.setState({
        photos: [...response],
      });
      this.paginantePhotos();
    });
  }

  // if state was updated we look how many photos should be added in DOM calling paginantePhotos

  componentDidUpdate(prevProps, prevState) {
    if (prevState.photosNumber !== this.state.photosNumber) {
      this.paginantePhotos();
    }
  }

  // here we select which photo should be added in DOM and set them in state 'showedPhotos'

  paginantePhotos = () => {
    const { photos, photosNumber } = this.state;

    const photosToShow = photos.slice(0, photosNumber);

    this.setState({
      showedPhotos: [...photosToShow],
    });
  };

  // here we add 10 more pages to the photosNumber in state and subsequently in DOM

  loadMorePhotos = () => {
    this.setState(prevState => ({
      photosNumber: prevState.photosNumber + 10,
    }));
  };

  render() {
    const { showedPhotos } = this.state;
    return (
      <div className="container">
        <ul className="list">
          {showedPhotos.map(photo => {
            return (
              <li key={photo.id}>
                <ImageGalleryItem photo={photo} />
              </li>
            );
          })}
        </ul>
        {/* button is displayed only if there is more photos to load left */}
        {showedPhotos.length < 50 && (
          <Button loadMorePhotos={this.loadMorePhotos} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
