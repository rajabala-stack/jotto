import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtil';
import App from './App';
import { Provider } from 'react-redux';

//activatate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
let store;
const setup = (initialState = {}) => {
  store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  //add valud to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train ' } });
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  submitButton.simulate('click', { preventDefault: () => {} });
  return wrapper;
};
describe('no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord: 'party', success: false, guessedWords: [] });
  });
  test('create GuessedWords table with one row', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsRows).toHaveLength(1);
  });
});
describe('some words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });
  });
  test('add row to guessedWords table', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsRows).toHaveLength(2);
  });
});
describe('guess secret word', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });

    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'party' } };
    inputBox.simulate('change', mockEvent);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    const mockPreventDefault = jest.fn();
    const mockClickEvent = { preventDefault: mockPreventDefault };
    submitButton.simulate('click', mockClickEvent);
  });

  test('add row to guessedWords table', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsRows).toHaveLength(3);
  });

  test('displays congrats component', () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  test('does not display input component contents', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBeFalsy();
  });
});
