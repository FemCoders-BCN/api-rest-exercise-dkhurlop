import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PicturePage.css';

function PicturesPage() {
  const [imageId, setImageId] = useState('');
  const [image, setImage] = useState('');

  const handleSearch = () => {
    if (imageId) {
      const service = LoremPicsumService();
      service.getById(imageId, '400')
        .then(response => {
          const imageUrl = `https://picsum.photos/id/${imageId}/400`;
          setImage(imageUrl);
        })
        .catch(error => {
          console.error('Error al buscar imagen:', error);
        });
    }
  };

  return (
    <main>
      <h2>Buscar imagen por ID</h2>
      <Navbar />
      <div>
        <input
          type="number"
          placeholder="Ingrese un ID"
          value={imageId}
          onChange={(e) => setImageId(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar Imagen</button>
      </div>
      {image && (
        <div className='image-container'>
          <img src={`https://picsum.photos/id/${imageId}/400`} alt={`Imagen por ID ${imageId}`} />
        </div>
      )}
    </main>
  );
}

export default PicturesPage;
