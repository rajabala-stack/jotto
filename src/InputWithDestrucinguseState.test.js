// import { shallow } from 'enzyme';
// import { findByTestAttr } from '../test/testUtil';

// import Input from './Input';
// import React from 'react';
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));
// const setup = (secretWord = 'party') =>
//   shallow(<Input secretWord={secretWord} />);

// test('Input renders without error', () => {
//   const wrapper = setup();
//   const inputComponent = findByTestAttr(wrapper, 'component-input');
//   expect(inputComponent.length).toBe(1);
// });
// describe('state controlled input field', () => {
//   test('state updates with value of input box upon change', () => {
//     const wrapper = setup();
//     const inputBox = findByTestAttr(wrapper, 'input-box');

//     const mockEvent = { target: { value: 'train' } };

//     inputBox.simulate('change', mockEvent);

//     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
//     const mockPreventDefault = jest.fn();
//     const mockClickEvent = { preventDefault: mockPreventDefault };

//     const submitButton = findByTestAttr(wrapper, 'submit-button');
//     submitButton.simulate('click', mockClickEvent);

//     expect(mockPreventDefault).toHaveBeenCalled();
//   });
// });
