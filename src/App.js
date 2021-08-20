import { getSecretWord } from './actions';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const success = useSelector((state) => state.success);
  const secretWord = useSelector((state) => state.secretWord);
  const dispatch = useDispatch();

  const guessedWords = useSelector((state) => state.guessedWords);
  useEffect(() => {
    dispatch(getSecretWord());
  });
  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
