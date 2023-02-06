import React from "react";

function GuessInput({ handleNewSubmit }) {

  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {

    event.preventDefault();

    if(guess.length===5){
      handleNewSubmit(guess)
      setGuess('');
    }

  }

  return (

      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text" 
          required={true}
          autoComplete="off"
          minLength={5}
          maxLength={5}
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>

  );

}

export default GuessInput;
