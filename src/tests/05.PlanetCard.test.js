import React from 'react';
import { render, screen } from '@testing-library/react';

import CharCard from '../components/CharCard';

describe('5 - Crie um componente chamado `CharCard`', () => {
  it('Será validado se o componente `<CharCard />` é renderizado', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
  });

  it('Será validado se o componente `<CharCard />` possui uma div com o atributo `data-testid="char-card"`', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
    const CharCard = screen.getByTestId("char-card");
    
    expect(CharCard).toBeInTheDocument();
  });

  it('Será validado se é renderizado o texto recebido pela prop `charName`', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
    const nameText = screen.getByText("Jon");

    expect(nameText).toBeInTheDocument();
  });

  it('Será validado se é renderizado o texto recebido pela prop `charTitle`', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
    const titleText = screen.getByText("No Nothing");

    expect(titleText).toBeInTheDocument();
  });

  it('Será validado se é renderizado o texto recebido pela prop `charQuote`', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
    const quoteText = screen.getByText("Xablau!");

    expect(quoteText).toBeInTheDocument();
  });

  it('Será validado se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `charImage`', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);
    const charImage = screen.getByRole('img');

    expect(charImage).toBeInTheDocument();
    expect(charImage).toHaveAttribute('src', 'path-to-image');
  });

  it('Será validado se, além do atributo `src`, a imagem renderizada possui o atributo `alt` com o texto "Character {charName}"', () => {
    render(<CharCard charName="Jon" charTitle="No Nothing" charQuote="Xablau!" charImage="path-to-image" />);

    const charImage = screen.getByRole('img');
    expect(charImage).toHaveAttribute('alt', 'Character Jon');
  });
});
