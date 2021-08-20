import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtil';
import App from './App';

import { getSecretWord as mockGetSecretWord } from './actions';
import { Provider } from 'react-redux';
//activatate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
test('renders learn react link', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
});
describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('getSecretWord on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
