import { Component } from 'react';

import './ImageGallery.scss';
import fetchImages from '../services/fetchImages';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    showedImages: [],
    // ImagesNumber indicates how many phowos should be
    imagesNumber: 10,
  };

  // here I get Images from the fetch and set them in state 'Images'

  componentDidMount() {
    fetchImages().then(response => {
      this.setState({
        images: [...response],
      });
      this.paginanteImages();
    });
  }

  // if state was updated I look how many Images should be added in DOM calling paginanteImages

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesNumber !== this.state.imagesNumber) {
      this.paginanteImages();
    }
  }

  // here I select which photo should be added in DOM and set them in state 'showedImages'

  paginanteImages = () => {
    const { images, imagesNumber } = this.state;

    const imagesToShow = images.slice(0, imagesNumber);

    this.setState({
      showedImages: [...imagesToShow],
    });
  };

  // here I add 10 more pages to the ImagesNumber in state and subsequently in DOM

  loadMoreImages = () => {
    this.setState(prevState => ({
      imagesNumber: prevState.imagesNumber + 10,
    }));
  };

  render() {
    const { showedImages } = this.state;
    return (
      <div className="container">
        <ul className="list">
          {showedImages.map(image => {
            return (
              <li key={image.id}>
                <ImageGalleryItem image={image} />
              </li>
            );
          })}
        </ul>
        {/* button is displayed only if there is more Images to load left */}
        {showedImages.length < 50 && (
          <Button loadMoreImages={this.loadMoreImages} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
