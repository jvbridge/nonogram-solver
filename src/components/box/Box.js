import React from 'react';

function Box({ state }) {
  switch (state) {
    case 'empty':
      return <button></button>;

    default:
      throw new Error('no state passed in');
  }
}

export default Box;
