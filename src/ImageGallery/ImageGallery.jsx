import { Component } from 'react';

import './ImageGallery.scss';
import fetchImages from '../services/fetchImages';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    // ImagesNumber indicates how many images should be in the DOM
    imagesNumber: 10,
  };

  componentDidMount() {
    this.loadImages();
  }

  // Here we accept result from request and add in DOM only necessary amount of images

  loadImages = () => {
    const { imagesNumber } = this.state;
    fetchImages().then(response => {
      const showedImages = response.slice(0, imagesNumber);
      this.setState({
        images: [...showedImages],
      });
    });
  };

  // if state was updated I look how many Images should be added in DOM calling loadImages

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesNumber !== this.state.imagesNumber) {
      this.loadImages();
    }
  }

  // here I add 10 more images to the ImagesNumber in state and subsequently in DOM

  loadMoreImages = () => {
    this.setState(prevState => ({
      imagesNumber: prevState.imagesNumber + 10,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <div className="container">
        <ul className="list">
          {images.map(image => {
            return (
              <li key={image.id}>
                <ImageGalleryItem image={image} />
              </li>
            );
          })}
        </ul>
        {/* button is displayed only if there is more Images to load left */}
        {images.length < 50 && <Button loadMoreImages={this.loadMoreImages} />}
      </div>
    );
  }
}

export default ImageGallery;
