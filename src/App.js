import React from 'react';
import * as Component from './components';

class App extends React.Component {
  render() {
    return (
      <>
        <Component.Header />
        <Component.CharacterList />
      </>
    );
  }
}

export default App;
