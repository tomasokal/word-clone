import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {

  let guessCheck = checkGuess(guess, answer)
  const guessEmpty = !!(guess === "     ")
  
  return(

    <div>
      <p className="guess">
        {range(guessCheck.length).map((rowIndex) => (
           <span 
            key={rowIndex} 
            className={
              guessEmpty
              ? `cell`
              : `cell ${guessCheck[rowIndex].status}`
            }
          >
            {guessCheck[rowIndex].letter}
          </span>
        ))}
      </p>
    </div>

  );
}

export default Guess;
