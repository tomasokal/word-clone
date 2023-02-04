import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [submits, setSubmits] = React.useState(['TOMAS', 'BRRIA', 'SARDN', 'LOUIE']);

  function handleNewSubmit(guess) {
    const nextSubmits = [...submits, guess];
    setSubmits(nextSubmits);
  }

  return(

    <>
    
      <div className='guess-results'>
        {submits.map((submit, index) => {
          const submitID = `submit-${index}`;
          return (
            <div
              key={submitID}
              className='guess'
            >
              {submit}
            </div>
          )
        })}
      </div>

      <GuessInput 
        handleNewSubmit={handleNewSubmit}
      />
    
    </>

  );
}

export default Game;
