import React from "react";

function Logic({ answer, win, attempts }) {

  let condition = !!(win==='win')
  let conditionLoss = !!(attempts > 5 && !condition)
  let conditionWin = !!(attempts < 6 && condition)
  
  return(
    <>
      {conditionWin && 
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{attempts} guesses</strong>.
        </p>
      </div>
      }
      {conditionLoss && 
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
      }
    </>
  );
}

export default Logic;
