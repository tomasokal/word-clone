import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import Guess from '../Guess/Guess';
import Logic from '../Logic/Logic';

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
  const [win, setWin] = React.useState('playing');

  function handleNewSubmit(guess) {
    if(attempts < NUM_OF_GUESSES_ALLOWED)
    {
      const nextSubmits = [...submits];
      nextSubmits[attempts] = guess;
      setSubmits(nextSubmits);
      setNumOfAttempts(attempts + 1);
      if(nextSubmits.includes(answer))
      {
        setWin('win');
      }
    }
  }


  return(

    <>
    
      <div className='guess-results'>
        {submits.map((submit, index) => {
          return (
            <Guess
              key={index}
              guess={submit}
              answer={answer}
            />
          )
        })}
      </div>
      
      <Logic 
        answer={answer}
        win={win}
        attempts={attempts}
        setWin={setWin}
      />

      <GuessInput 
        handleNewSubmit={handleNewSubmit}
      />
    
    </>

  );
}

export default Game;
