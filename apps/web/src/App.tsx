import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={styles.logoReact} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React aux_edit</h1>
      <div className={styles.card}>
        <button type="button" onClick={() => setCount((countLocal) => countLocal + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
