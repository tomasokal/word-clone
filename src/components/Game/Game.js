import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [submits, setSubmits] = React.useState([
    '     ',
    '     ',
    '     ',
    '     ',
    '     ',
    '     '
  ]);

  const [attempts, setNumOfAttempts] = React.useState(0);

  function handleNewSubmit(guess) {
    const nextSubmits = [...submits];
    nextSubmits[attempts] = guess;
    setSubmits(nextSubmits);
    setNumOfAttempts(attempts + 1);
  }

  console.log(attempts)

  return(

    <>
    
      <div className='guess-results'>
        {submits.map((submit, index) => {
          const submitID = `submit-${index}`;
          return (
            <Guess
              id={submitID}
              guess={submit}
            />
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
