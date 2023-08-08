import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import PictureObject from '../../components/pictureObject/PictureObject';
import { LoremPicsumService } from '../../services/LoremPicsumService';

function PicturePage() {
  const { imageId } = useParams();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const service = LoremPicsumService();
        const response = await service.getById(imageId, '400');
        setImageData(response.data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, [imageId]);

  return (
    <main>
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <Navbar />
      {imageData && (
        <div>
          <PictureObject image={imageData} />
        </div>
      )}
    </main>
  );
}

export default PicturePage;
