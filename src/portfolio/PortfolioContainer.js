import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import bild1 from '../assets/img/bild-1.jpg'
import bild2 from '../assets/img/bild-2.jpg'
import bild3 from '../assets/img/bild-3.jpg'
import bild4 from '../assets/img/bild-4.jpg'
import bild5 from '../assets/img/bild-5.jpg'
import bild6 from '../assets/img/bild-6.jpg'
import bild7 from '../assets/img/bild-7.jpg'
import bild8 from '../assets/img/bild-8.jpg'
import bild9 from '../assets/img/bild-9.jpg'
import bild10 from '../assets/img/bild-10.jpg'

function PortfolioContainer() {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const images = [
    bild1,
    bild2,
    bild3,
    bild4,
    bild5,
    bild6,
    bild7,
    bild8,
    bild9,
    bild10,
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