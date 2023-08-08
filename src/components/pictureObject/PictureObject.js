import React from 'react';


function PictureObject({ image }) {
  return (
    <div>
      <h3>ID: {image.id}</h3>
      <p>Autor: {image.author}</p>
      <img src={image.download_url} alt={image.author} />
    </div>
  );
}

export default PictureObject;
