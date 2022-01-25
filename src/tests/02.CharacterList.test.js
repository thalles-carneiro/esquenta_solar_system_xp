import React from 'react';
import { render, screen} from '@testing-library/react';

import App from '../App';
import CharacterList from '../components/CharacterList';

describe('2 - Crie um componente chamado `CharacterList`', () => {
  it('Será verificado se o componente <CharacterList /> existe', () => {
    render(<CharacterList />);
  });

  it('Será validado se existe uma `div` que possui o data-testid="character-list"', () => {
    render(<CharacterList />);

    expect(screen.getByTestId("character-list")).toBeInTheDocument();
  });

  it('Será validado se o componente `<CharacterList />` está sendo renderizado no componente principal `App`', () => {
    render(<App />);

    expect(screen.getByTestId("character-list")).toBeInTheDocument();
  });
});
