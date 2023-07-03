import './App.css';
import Navbar from './components/navbar/Navbar';
import logo from './assets/img/logo.svg';

function App() {
  return (
    <>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Ejercicio de consumo de API y persistencia de datos con JSON-SERVER</h1>
      <Navbar/>
      <ul>
        <p>INSTRUCCIONES</p>
        <li>Clonar el repositorio que se creó al aceptar el reto.</li>
        <li>npm install</li>
        <li>Este ejercicio tiene 2 partes, en la primera, vamos a crear una app que consuma una API de imágenes llamada Lorem Picsum <strong>https://picsum.photos</strong></li>
        <li>En la segunda parte, crearemos nuestro propio archivo json que nos permitirá hacer un CRUD. Notarás que esta aplicación no está al 100% resuelta, tendrás que ir viendo los archivos, para darte cuenta, de qué es lo que falta para que funcione todo.</li>
        <li>Ya tenemos nuestro router funcionando.</li>
        <li>¿Cúales son los pasos que has de seguir?</li>
        <ol>
          <li>Crear la funcionalidad del servicio. Tienes un componente que tendrá las peticiones a la API, no harás las peticiones dentro de los componentes que renderizan el contenido, ya que queremos hacer un código limpio. Dentro de la carpeta "services" existe un archivo llamado "LoremPicsumService", deberás crear la funcionalidad para llamar a 3 endpoints, la primera será la llamada a los primeros 30 objetos que devuelve la API, la segunda será la llamada a un objeto por su id y la tercera será una llamada de un objeto en escala de grises.
            <ul>
              <li>PRIMER ENDPOINT: https://picsum.photos/v2/list</li>
              <li>SEGUNDO ENDPOINT: https://picsum.photos/id/image/size</li>
              <li>TERCER ENDPOINT: descúbrelo tú misma dentro de la documentación y entiende como tiene que ser construida para recibirla.</li>
            </ul>
          </li>
          <li>Tienes 4 componentes en la carpeta pages, en picturesPage estará renderizado el primer endpoint, en picturePage el segundo, en grayscalePage el tercero y el cuarto componente de favoritesPage lo usaremos para hacer persistencia de datos con json-server. Mira lo que encuentras en cada link de arriba, que navega a cada página.</li>
          <li>Y lo último pero no menos importante, no te olvides de los tests.</li>
        </ol>
      </ul>
    </>
  );
}

export default App;
