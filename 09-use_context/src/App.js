import { useState} from 'react'
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './router/AppRouter';

function App() {

  const  [user, setUser] = useState({nombre: "ivan", web: "ivan.com"})

  const curso = {
    id: 1,
    titulo: "Máster en TypeScript",
    contenido: "Muchas horas de contenido..."
  }

  return (
    <div className="App">
      <PruebaContext.Provider value={{user, setUser}}>
        <AppRouter/>
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
