import React from 'react';
import { render, screen } from '@testing-library/react';

import CharacterList from '../components/CharacterList';

describe('4 - Renderize o componente `Title` dentro do componente `CharacterList`', () => {
  it('Será validado se o texto "Characters" é renderizado usando o componente `Title` dentro do componente `CharacterList`', () => {
    render(<CharacterList />);
    const title = screen.getByRole('heading', { level: 2 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Characters/i);
  });
});
