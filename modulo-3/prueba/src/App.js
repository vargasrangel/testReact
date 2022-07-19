import logo from './logo.svg';
import Moises from "./foto.jpeg";
import './App.css';
import Saludar from './components/Saludar';

function App() {
  const nombre = "moises"
  let apellido = "vargas"
  var edad = 26
  const direccion = {
    calle: "C Union",
    pais: "Mexico"
  }

  function holaMundo(){
    alert("Hola Mundo!")
  }

  const adiosMundo = () => {
    alert("Adios Mundo!")
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  onDoubleClick={adiosMundo}/>
        <img src={Moises} className="App-logo" alt="foto" onClick={holaMundo}/>

        <p>
          Aprendiendo React!
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/moisesvargasrangel/"
          target="_blank"
          rel="noopener noreferrer"
        >

          Me llamo <i>{nombre.toUpperCase()}</i> {apellido.toUpperCase()}
          <br></br>
          Tengo {26} años
          <br></br>
          Vivo en {direccion.pais}
          <br></br>{direccion.calle}
        </a>

        {/* PROPS / PROPIEDADES */}
        <Saludar nombre="Harland" residencia="Sao Paulo" estilo="rojo">
          <p>Soy el hijo/children del componente Saludar</p>
        </Saludar>

        <Saludar nombre="Yanni" residencia="USA" estilo="orange"/>
        
      </header>
    </div>
  );
}

export default App;
