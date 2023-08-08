import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureObject from '../../components/pictureObject/PictureObject';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PicturesObject.css';

function PicturesPage() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const service = LoremPicsumService(); // Llamada como función, no como constructor
        const response = await service.getAll();
        setImageList(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <main>
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <Navbar />
      <ul>
        {imageList.map((image) => (
          <PictureObject key={image.id} image={image} />
        ))};
      </ul>
    </main>
  );
}

export default PicturesPage;

