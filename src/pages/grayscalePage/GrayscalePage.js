import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { LoremPicsumService } from "../../services/LoremPicsumService";
import './GrayscalePage.css'

function GrayscalePage() {
  const [grayscaleImage, setGrayscaleImage] = useState(null);

  useEffect(() => {
    async function fetchGrayscaleImage() {
      try {
        const service = LoremPicsumService();
        const response = await service.getRandomGrayscale("200/300");
        console.log("API Response:", response.config.url); // Verifica la URL de la imagen en la consola
        setGrayscaleImage(response.config.url);
      } catch (error) {
        console.error("Error fetching grayscale image:", error);
      }
    }

    fetchGrayscaleImage();
  }, []);

  return (
    <main>
      <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
      <Navbar />
      {grayscaleImage && (
        <div className="grayscale-card">
          <img src={grayscaleImage} alt="Imagen en escala de grises" />
        </div>
      )}
    </main>
  );
}

export default GrayscalePage;

