import axios from "axios";

const IMAGES_URL = "https://jsonplaceholder.typicode.com/photos";

export default function fetchPhotos() {
  return axios.get(IMAGES_URL).then((response) => {
    const data = response.data;

    return data.filter((image, index) => {
      return (
        //   Here I filter albums with only even ID
        image.albumId % 2 === 0 &&
        //   Here I compare that album id of element is not equal to album id of preveaus element
        data[index].albumId !== data[index - 1].albumId
      );
    });
  });
}
