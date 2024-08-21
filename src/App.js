import './App.css';
import Card from './components/Card.js';
import SortButtons from './components/SortButtons.js';
import cientificos from './utils/utils2.js';
import {useState} from 'react';

function App() {
  const [scientists, setScientist] = useState(cientificos);

  const sortByName = () => {
    const sortedByName = [...scientists].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setScientist(sortedByName);
  }

  const sortByDate = () => {
    const sortedByDate = [...scientists].sort((a, b) => a.año - b.año);
    setScientist(sortedByDate);
  }

  const renderCards = () => {
    return scientists.map((cientifico) => (
      <Card
        key={cientifico.key}
        nombre={cientifico.nombre}
        titulo={cientifico.titulo}
        año={cientifico.año}
        descripcion={cientifico.descripcion}
        fraseCelebre={cientifico.fraseCelebre}
        nacimiento={cientifico.nacimiento}
        muerte={cientifico.muerte}
        imagen={cientifico.imagen}
      />
    ));
  };

  return (
    <div className="container">
      <h1>Cientificos Famosos</h1>
      <SortButtons 
        sortByName={sortByName}
        sortByDate={sortByDate}
      />
      <hr/>
      <div className="card-container">
        {renderCards()}
      </div>
    </div>
  );
}

export default App;
