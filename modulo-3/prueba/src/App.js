import logo from './logo.svg';
import Moises from "./foto.jpeg"
import './App.css';

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
          href="https://reactjs.org"
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
      </header>
    </div>
  );
}

export default App;
