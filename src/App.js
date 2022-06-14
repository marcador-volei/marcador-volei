import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [contador1, setContador1] = useState(0);
  const [equipo1, setEquipo1] = useState('Equipo A');
  const [contador2, setContador2] = useState(0);
  const [equipo2, setEquipo2] = useState('Equipo B');
  const [esCambio, setEsCambio] = useState(false);

  // useEffect( () => {
  //   console.log('ola');
    
  // }, [])
  
  const cambio = () => {
    esCambio ? setEsCambio(false) : setEsCambio(true)
  }

  const resta1 = () => {
    if (contador1 > 0) {  
      let res = contador1 -1;
      console.log(res);
      setContador1(res)
    }
  }
  const resta2 = () => {
    if (contador2 > 0) {  
      let res = contador2 -1;
      console.log(res);
      setContador2(res)
    }
  }

  const suma1 = () => {
    let res = contador1 +1;
    console.log(res);
    setContador1(res)
  }
  const suma2 = () => {
    let res = contador2 +1;
    console.log(res);
    setContador2(res)
  }

  return (
    <div className={esCambio ? 'AppCambio' : 'App'}>
          <div>
            <input
              type={'text'}
              onChange={(e) => setEquipo1(e.target.value)} 
              value={equipo1}>
            </input>
            <div>
              <button onClick={resta1} >-</button>
              <input 
                type={'number'} 
                min={0}
                // className={css.contador1} 
                onChange={(e) => setContador1(e.target.value)} 
                value={contador1}>
              </input>
              <button onClick={suma1} >+</button>
            </div>
          </div>
          <button onClick={cambio}>CAMBIO</button>
          <div>
          <input
              type={'text'}
              onChange={(e) => setEquipo2(e.target.value)} 
              value={equipo2}>
            </input>
            <div>
              <button onClick={resta2} >-</button>
              <input 
                type={'number'} 
                min={0}
                // className={css.contador2} 
                onChange={(e) => setContador2(e.target.value)} 
                value={contador2}>
              </input>
              <button onClick={suma2} >+</button>
            </div>
          </div>
    </div>
  );
}

export default App;
