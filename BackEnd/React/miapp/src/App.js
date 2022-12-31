import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

    const element = (<div className="App">
        <header className="App-header">
          <h1>La hora es:</h1>
          <h2>Mexico {new Date().toLocaleTimeString('es-MX')}</h2>
          <h2>Estados Unidos {new Date().toLocaleTimeString('en-US')}</h2>
          <h2>Korea {new Date().toLocaleTimeString('ko-KR')}</h2>
          <h2>Estados Unidos {new Date().toLocaleTimeString('en-US')}</h2>
        </header>
      </div>
    );

  root.render(element)
}
/**
 * lo que encontramos entre llaves en el h2, es una forma de mencionar que es javascript
 * estamos creando una clase llamada Date y usamos su metodo localTimeString
 */
export default App;
