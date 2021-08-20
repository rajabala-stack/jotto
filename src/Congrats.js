import React from 'react';

function Congrats(props) {
  return props.success ? (
    <div data-test='component-congrats' className='alert alert-success'>
      <span data-test='congrats-message'>
        Congrdulations! You gussed the word!
      </span>
    </div>
  ) : (
    <div data-test='component-congrats'></div>
  );
}

export default Congrats;
