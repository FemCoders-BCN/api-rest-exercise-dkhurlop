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
        const service = LoremPicsumService();
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
      <ul className='images-container'>
        {imageList.map((image) => (
          <li className="imagelist" key={image.id}>
            <PictureObject image={image} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PicturesPage;


