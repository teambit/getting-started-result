import React, { useEffect, useState } from 'react';
import { useJokes } from './use-jokes';

const styles = require('./use-jokes-docs.module.scss');

export const ToggleBetweenRemoteAndLocal = () => {
  const [isLocal, setIsLocal] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setIsLocal((prev) => !prev)}>
          Toggle between 'local' and 'remote'
        </button>
      </div>
      <GetJokes local={isLocal}></GetJokes>
    </div>
  );
};

const GetJokes = ({ local = false }) => {
  const [
    setIsLocal,
    getJoke,
    joke,
    error,
    disableGetJoke,
    saveJoke,
    removeJoke,
  ] = useJokes(local);

  useEffect(() => {
    setIsLocal(local);
  }, [local]);

  return (
    <div className={styles.example}>
      <h4>{local ? '[LOCAL]' : '[REMOTE]'}</h4>
      <div className={styles.contentWrapper}>{error || joke}</div>
    </div>
  );
};
