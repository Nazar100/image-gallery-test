import axios from 'axios';

const IMAGES_URL = 'https://jsonplaceholder.typicode.com/photos';

export default function fetchImages() {
  return axios.get(IMAGES_URL).then(({ data }) => {
    return data.filter((image, index) => {
      return (
        //   Here I filter albums with only even ID
        image.albumId % 2 === 0 &&
        //   Here I make sure that album id of element is not equal to the album id of preveaus element
        data[index].albumId !== data[index - 1].albumId
      );
    });
  });
}
