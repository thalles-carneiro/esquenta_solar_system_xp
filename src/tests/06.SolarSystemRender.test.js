import React from 'react';
import { render, screen } from '@testing-library/react';

import CharacterList from '../components/CharacterList';
import Characters from "../data/characters";

describe('6 - Renderize uma lista com os personagens de Game of Thrones', () => {
  it('Será verificado se é renderizado um componente `<CharCard />` para cada personagem da lista', () => {
    render(<CharacterList />);
    const characterCards = screen.getAllByTestId('char-card');

    expect(characterCards).toHaveLength(8);
  });

  it('Será verificado se todos os personagem da lista estão sendo listados na tela', () => {
    render(<CharacterList />);

    const allCharacters = screen.getAllByTestId('char-name');

    allCharacters.forEach((char, index) => {
      expect(char).toHaveTextContent(Characters[index].fullName);
    });
  });
});
