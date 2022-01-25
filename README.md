# Requisitos da dinâmica

## 1. Crie um componente chamado `Header`

- Crie um componente chamado `Header` dentro da pasta `src/components`. Este componente irá renderizar o título principal da página.
- Ele deve conter uma tag `header` e, dentro dela, uma tag `h1`. O texto da tag `h1` deve ser "Game of Thrones".
- Renderize o componente `Header` dentro do componente principal `App`.

### O que será verificado

* Será validado se o componente `<Header />` é renderizado.

* Será validado se o componente `<Header />` contém uma tag `header`.

* Será validado se o componente `<Header />` contém uma tag `h1`.

* Será validado se o componente `<Header />` renderiza corretamente o texto "Game of Thrones".

* Será validado se o componente `<Header />` está sendo renderizado no componente principal `App`.


## 2. Crie um componente chamado `CharacterList`

- Crie um componente chamado `CharacterList` dentro da pasta `src/components`.
- Este componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="character-list"`.
- Renderize o componente `CharacterList` abaixo do `Header`, dentro do componente principal `App`.

### O que será verificado

* Será validado se o componente `<CharacterList />` é renderizado.

* Será validado se existe uma `div` que possui o `data-testid="character-list"`.

* Será validado se o componente `<CharacterList />` está sendo renderizado no componente principal `App`.


## 3. Crie um componente chamado `Title`

- Crie um componente chamado `Title` dentro da pasta `src/components`.
- O componente `Title` deve receber uma prop `headline`.
- Ele deve conter uma tag `h2`, que deve renderizar o texto recebido pela prop `headline`.

### O que será verificado

* Será validado se o componente `<Title />` é renderizado.

* Será validado se o componente `<Title />` contém uma tag `h2`.

* Será validado se o componente `<Title />` renderiza o texto passado pela prop `headline` dentro de uma tag `h2`.


## 4. Renderize o componente `Title` dentro do componente `CharacterList`

- Renderize o componente `Title` dento do componente `CharacterList`.
- O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Characters".

### O que será verificado

* Será validado se o texto "Characters" é renderizado usando o componente `Title` dentro do componente `CharacterList`.


## 5. Crie um componente chamado `CharCard`

- Crie um componente chamado `CharCard` dentro da pasta `src/components`.
- O componente `CharCard` deve receber quatro props: `charName`, `charTitle`, `charQuote` e `charImage`.
- O componente `CharCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="char-card"`.
- O componente `CharCard` deve renderizar o texto recebido pela prop `charName`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="char-name"`.
- O componente `CharCard` deve renderizar o texto recebido pela prop `charTitle`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="char-title"`.
- O componente `CharCard` deve renderizar o texto recebido pela prop `charQuote`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="char-quote"`.
- O componente `CharCard` deve renderizar uma imagem que tenha o atributo `src` com o valor recebido pela prop `charImage`.
- Além do atributo `src`, a imagem renderizada deve ter o atributo `alt` com o texto `Character {charName}`, onde `{charName}` é o valor recebido pela prop `charName`.

### O que será verificado

* Será validado se o componente `<CharCard />` é renderizado.

* Será validado se o componente `<CharCard />` possui uma div com o atributo `data-testid="char-card"`.

* Será validado se é renderizado o texto recebido pela prop `charName`.
 
* Será validado se é renderizado o texto recebido pela prop `charTitle`.

* Será validado se é renderizado o texto recebido pela prop `charQuote`. 

* Será validado se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `charImage`.

* Será validado se, além do atributo `src`, a imagem renderizada possui o atributo `alt` com o texto `Character {charName}`, onde `{charName}` é o valor recebido pela prop `charName`.


## 6. Renderize uma lista com os personagens de Game of Thrones

- Renderize uma lista com os personagem de Game of Thrones dentro do componente `CharacterList`.
- Utilize o componente `CharCard` para renderizar cada item da lista de personagens.
- Você encontrará uma lista com os nomes, títulos, citações e as imagens de alguns personagens de Game of Thrones no arquivo `src/data/characters.js`.
- Você deve importar a lista no componente `CharacterList` usando o código:
```javascript
import characters from '../data/characters';
```
- A lista de personagens é um _array_ de objetos no seguinte formato:
```javascript
{
  fullName: "Nome do personagem",
  title: "Título do personagem",
  quote: "Citação do personagem",
  imageUrl: "Link para a imagem do personagem",
}
```
- Para cada personagem da lista, você deverá renderizar um componente `CharCard`, passando o atributo `fullName` para a prop `charName`, o atributo `title` para a prop `charTitle`, o atributo `quote` para a prop `charQuote` e o atributo `imageUrl` para a prop `charImage`.

> :bulb: Dica: lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um array. Lembre-se que ao renderizar uma lista, você deve passar o atributo `key` para cada item. Você pode usar o nome do personagem como `key`.

### O que será verificado

* Será verificado se é renderizado um componente `<CharCard />` para cada personagem da lista.

* Será verificado se todos os personagem da lista estão sendo listados na tela.

