import React, { useEffect } from 'react';

// REPLACE 'demo-org' WITH YOUR OWN ORGANIZATION/USERNAME
import { Button } from '@demo-org/demo-scope.ui.elements.button';
import { useJokes } from '@demo-org/demo-scope.hooks.use-jokes';

const styles = require('./tech-jokes-viewer.module.scss');

export type BadJokesProps = {
  local: boolean;
  className?: string;
};

/** Retrieves and displays bad jokes */
export const TechJokesViewer = ({ local, className }: BadJokesProps) => {
  const [
    setIsLocal,
    getJoke,
    joke,
    error,
    disableGetJoke,
    saveJoke,
    removeJoke,
  ] = useJokes(local);

  const renderJoke = (text: string) => {
    const textArr = text.split('\n');
    return textArr.map((line, key) => <p key={key}>{line}</p>);
  };

  useEffect(() => {
    setIsLocal(local);
  }, [local]);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>{error || renderJoke(joke)}</div>
      <div className={styles.buttonsWrapper}>
        <Button disabled={disableGetJoke} onClick={getJoke}>
          {disableGetJoke ? 'loading...' : 'another one, please'}
        </Button>
        <Button
          variant="secondary"
          disabled={disableGetJoke}
          onClick={() =>
            local ? removeJoke(joke, getJoke) : saveJoke(joke, getJoke)
          }
        >
          {local ? 'remove joke' : 'save joke'}
        </Button>
      </div>
    </div>
  );
};
