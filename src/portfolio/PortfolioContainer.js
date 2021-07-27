import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer';

function PortfolioContainer() {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const images = [
    '../public/resources/bild-1.jpg',
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
  ];

    const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

    const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

    
        return (
        
            <body>
        <section>
        <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>
      ))}

      {isViewerOpen && (
        <ImageViewer 
            id='image-viewer-portfolio'
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
    </div>
        </section>
            </body>
        )
}

    export default PortfolioContainer