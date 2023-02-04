import React from "react";
import { range } from "../../utils";

function Guess({ id, guess="     "}) {

  return(

    <div>
      <p className="guess">
        {range(guess.length).map((rowIndex) => (
           <span key={id} className="cell">{guess[rowIndex]}</span>
        ))}
      </p>
    </div>

  );
}

export default Guess;
