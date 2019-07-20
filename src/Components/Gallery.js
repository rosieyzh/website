import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';


 
class Gallery extends Component {

  render() {
  	const images = [
      {
        original: 'images/gallery/img_8.png',
        thumbnail: 'images/gallery/img_8.png',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_7.png',
        thumbnail: 'images/gallery/img_7.png',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_1.jpg',
        thumbnail: 'images/gallery/img_1.jpg',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_2.jpg',
        thumbnail: 'images/gallery/img_2.jpg',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_3.jpg',
        thumbnail: 'images/gallery/img_3.jpg',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_4.jpg',
        thumbnail: 'images/gallery/img_4.jpg',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_5.jpg',
        thumbnail: 'images/gallery/img_5.jpg',
        sizes: "(max-height: 600px)"
      },
      {
        original: 'images/gallery/img_6.jpg',
        thumbnail: 'images/gallery/img_6.jpg',
        sizes: "(max-height: 600px)"
      },
    ]

    return (
      <ImageGallery items={images} showFullscreenButton={false}/>
    );
    
  }
}

export default Gallery;