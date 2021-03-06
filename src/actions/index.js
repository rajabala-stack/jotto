import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const getSecretWord = () => {
  return (dispatch, getState) => {
    return axios.get('http://localhost:3030').then((response) => {
      dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data });
    });
  };
};

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });
    if (letterMatchCount === secretWord.length) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
