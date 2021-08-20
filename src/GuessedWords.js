import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents = '';

  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='gussed-instructions'>Try to guess the secret word!</span>
    );
  } else {
    const guessedWordRows = props.guessedWords.map((g, i) => (
      <tr data-test='guessed-word' key={i}>
        <td>{g.guessedWord}</td>
        <td>{g.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className='table table-sm'>
          <thead className='table-light'>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test='component-guessed-words'>{contents}</div>;
};
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
