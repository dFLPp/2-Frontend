# CSS: Introdução

Atualmente, para qualquer mudança de cor o tamanho de texto ou imagens em sites, bem como para a criação de sites resposivos para diferentes dispositivos e com animações fluidas e dinâmicas, usa-se CSS (cascading style sheets). A sintaxe usada no CSS basea-se em escolher um element e dizer quais características ele deve ter, ou seja, é o conjunto `selector{declaration block}`.

```CSS
p, div {
color: red;
text-align: center;
}
```

`p` e `div` são ambos **selectors**, termos que servem para representar algum elemento HTML que se queira modificar e tudo entre as chaves são **declarations**, intruções sobre a aparência do elemento. Repare que cada declaration é um conjunto/par "property:value;". Repare que com isso TODOS as tags <p> do arquivo HTML vão possuir essas properties especificadas.

Dependendo do selector que você usa, diferentes modificações fará. Você pode usar um `id` (`#meuId`), uma `classe` (`.minhaClasse`) ou o nome do elemento. Se usar o nome do elemento (p, por exemplo), todos os p's sofreram modificações. Se usar classes somente o conjunto de elementos que pertencem a essas classes receberam modificações, equanto que id's são usados para modificar um elemento.

## Como usar CSS

Para usar o CSS você precisa de um arquivo HTML. Crie um arquivo HTML e monte a estrutura básica. Depois disso crie outro arquivo, agora um que tenha como extensão o ".css". Depois disso basta adicionar, dentro do bloco `<head>` a linha ` <link rel="stylesheet" href="path/arquivo.css">`. Como isso você pode escrever CSS em um arquivo separado do HTML e ainda assim ver as mudanças acontecerem.

Outra forma de usar CSS é: dentro do bloco `<head>` você criar o bloco `<style>`. Dentro desse bloco você pode escrever CSS do mesmo jeito que escreveria se estivesse em um arquivo separado. Essa forma só não é muito usada porque deixa os arquivos HTML desnecessariamente grandes.

A terceira forma de usar CSS é através in-line styles. Cada elemento do HTML tem a property style que pode ser modifica.

Em termos de precedência/importância, in-line styles sempre são executado por último, styles do head são executados antes dos in-line e o CSS dos arquivos são executados antes dos outros 2. Dessa forma se dentro do arquivo CSS você modifica a cor de um parágrafo para vermelho, você pode mudar a cor para verde dentro do estilo in-line, já que ele o último a ser lido.

Dessa mesma forma, se você tem vários arquivos CSS, o arquivo que é importado por último (na linha mais a baixo) é aquele que vai aplicar as mudanças sobre um dado seletor.

## Properties de um selector

### Backgrounds:

Existem diversas variações e a título de exemplo: `background-color: rgba(red, green, blue, alpha)`. Red, green e blue são valores que variam de 0 a 256. Alpha é o valor da transparência (de 0 a 1).

### Borders:

São bordas. Você pode definir seu tipo, sua cor, sua largura, etc. Por exemplo:

```css
p {
  border-bottom: 6px solid red;
  border-style: solid;
  border-width: medium;
}
```

### Margins:

é usado para criar espaço _fora_ do elemento, como se fosse a grossura da moldura de uma foto. Deve-se especificar na ordem: top, right, bottom, left.

```css
div {
  margin: 25px 50px 75px 100px;
}
/** É comum e recomendado usar "auto" tanto No right quanto no left para existir simetria/responsividade. **/
```

### Padding:

É usado para criar espaço _dentro_ do elemento, como se existisse uma moldura interna. O modo de funcionamento é igual ao do margin, por exemplo:

```css
div {
  padding: 25px 50px 75px 100px;
}
```

### Height/Width:

basicamente você diz a largura e altura de uma imagem ou bloco(container), seja em pixels, cm, ou porcentagens da largura ou altura da tela (vw e vh respectivamente).

### Outline:

é uma ferramenta que podemos usar para formar os contornos dos elements, ou seja, depois de criar os paddings, margins, borders podemos ver o tamanho "final" do element.

```css
p.solid {
  outline-style: solid;
}
```

### Text-shadow:

Existem varias properties que poderiam ser citadas como text-align e text-indent, tome text-shadow como exemplo:

```css
h1 {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
```

A ordem dos values é direção horizontal, direção vertical, desfoque e cor, todas elas se referindo, é claro, a sombra.

### font-family:

A property é bem simples, quero demostrar a dirença entre Serif e Sans-serif aqui. De modo resumido, fontes Sans-serif são fontes onde as quinas das letras são quadradas. Já fontes Serif tem uma espécie de triângulo nas quinas dos caracteres (letras em geral).

Também é possivel usar fontes através do google, sendo necessário usar o `<link>`, por exemplo `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">` e depois fazendo `font-family: "Trirong", serif; `.

### Icons:

De modo análogo, para usar icons você precisa fazer um link, por exemplo se formos usar os icones que o google fornece usariamos: `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`. Para efetivamente fazer os icones aparecer temos que usar algum in-line tag, como `<i>` ou `<span>`. Por exemplo:
`<i class="material-icons">cloud</i>`.

### links:

O foco aqui é apresentar mecânicas como o hover (quando você passa o mouse por cima). Para que o hover funcione, você tem que ter determinado o os states "link" e "visited", antes. De mesmo modo você só pode usar o "active" se o hover já tiver sido definido. Veja o exemplo abaixo.

```css
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: underline;
}
/** quando passar com o mouse por cima do elemento a ele fica sublinhado**/
```

### Display:

É a property mais importante quando se trata de controlar o layout. Vai especificar como ou se um elemento vai existir. Todos os elementos em HTML tem um valor padrão para o display, a maioria sendo "block" ou "inline".

`Display: none;` não vai mostrar o elemento, ficando literalmente invisivel e não ocupando espaço. `visibility: hidden;` também é uma alternativa porém nesse caso o element fica invisível mas ocupa espaço.

### Position:

Vai definir o tipo de posicionamento de um elemento (`static`, `relative`, `fixed`, `absolute` ou `sticky`). As posições de um elemento na tela são definidas de acordo com suas distancias das margens da tela (top, right, bottom, left) como já visto na property `margin`, entretanto é necessário definir a position primeiro e só depois modificando as distancias.

- `position: static;` não é posicionado de nenhuma maneira especial, seguindo a "ordem/flow" da página. Como o nome diz, ele fica estático e não é afetado pelas properties "left", "right", "top" e etc. Mas afetado pelas margins.

- `position: relative;` seu posicionamento é relativo a sua posição inicial, sendo influenciado tanto pelo left, top, etc quanto pelas margins. Ou seja, quando você coloca uma div de 500x500 px² como position relative, quando você for mover ela (com margin, left/right/etc e com transform), ela vai se mover relativamente a posição inicial dela.

- `position: fixed;` elementos como essa property ficam sempre no mesmo lugar da página, até se sobrepondo a outros conteudos, isso porque ele é a relativo ao viewport (a tela)

- `position: absolute;` posiciona elementos relativamente ao ultimo ancestor (relativo à ultima div). Elementos com essa property também podem sobrepor outros elementos. Basicamente se existe outra div antes da que tem "position: absolute;" então essa ultima vai ficar "dentro" da primeira. Se não exister outra, ela fica relativa ao body do html.
- `position: sticky;` elementos como essa property ficam grudados, de acordo com o scrollbar, em uma determinada posição.

### z-index:

vai definir em que ordem os elementos são sobrepostos. Se uma imagem tem z-index de -1 e um texto tem z-index de 0 (não definido) a imagem vai aparecer atrás do texto, desfocada (não é o mesmo de deixar o texto em cima da imagem). Um element com z-index de +2 vai ficar sobre o element com z-index de +1. Uma observação é, o elemento que é escrito/posto depois no código html vai se soprepor ao elemento anterior, se nenhum deles tem o z-index.

### Overflow:

property usada em divs ou em block elements que tem width definida/especificada. Ela diz o que acontece com o conteudo que sai/ultrapassa os limites da div. overflow: visible; é o padrão e basicamente deixa o conteúdo excedente aparecer. Com `overflow: hidden;` o conteúdo que sai da div (excesso) fica invisível. Com `overflow: auto;` você scrollbars somente quando necessário. Repare que essa property não redimensiona o conteúdo ( não diminue o tamanho de uma imagem para ela caber na div, por exemplo. Nesse caso você tem que "setar" a width e a height da imagem em 100%)

### float:

usado para posicionar/ formatar conteúdo. Um exemplo de uso é deixar uma imagem do lado de um texto, ou então no meio do texto. O float pode ser left, right, none (padrão) ou inehit(quando ele herda o valor do float de seu ancestor/parent)

### clear:

É usado para ajeitar/formatar os elementos ao redor do float. Por exemplo, se o float está sobrepondo outra div na esquerda, você pode usar clear: left; na div que está sendo sobreposta. Outra utilidade é quando o uma imagem não cabe dentro de uma div e ela o ultrapassa. Nesse caso pode-se corrigir isso ao usar overflow: auto; na div que contém a imagem.

### box-sizing:

É útil para dizer como o tamanho dos elementos é contabilizado. Pode ser `content-box` (se você diz que uma div tem width=100px e adiciona padding e margins então o tamanho final vai ser maior que 100px) ou é `border-box` (se você diz que uma div tem width=100px, independente do padding e da margin que você use o a width vai se manter a mesma)

### Combinators:

É um simbolo que vai ditar a relação entre selectors. Se você faz `div, p{}` então tanto as div's quanto os p's vão ter as mesmas properties. Se você faz `div > p{}` só os p's que estão dentro da div são afetados. Se você fizar `div + p{}` então SÓ o primeiro p após a div vai ser afetado pelas properties. Se você faz `div ~ p{}` TODOS os p's após a div são afetados.

### Transformações:

As transformações servem para rotacionar, diminuir aumentar um elemento quanto você passa o mouse, clica, etc. Exitem transformations 2D e 3D. Em 2D existem diversos paramaters porém o chamado matrix() junta todos em uma só. Exemplo:

```css
div.class:hover {
  transform: rotate(50deg);
}

div#id1 {
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```

### Transitions:

É uma animação que você dá para qualquer modificação nas properties de um elemento. Exemplo:

```css
div {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
  transition: width 3s, height 3s, background-image 2s, color 3s, font-size 2s, text-shadow
      2s;
}

div:hover {
  width: 600px;
  height: 400px;
  background-image: url(https://s2.glbimg.com/0uDIvDqeP54S1Fxtu9P9Ceuf42Q=/620x430/top/e.glbimg.com/og/ed/f/original/2014/09/01/porco.jpg);
  background-size: cover;
  background-position: center;
  font-size: 50px;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

### filter:

É útil para modificar as cores de imagens. Existem diversas opções com blur, brightness, sature e etc. Por exemplo, quando você está deslogado do reddit e quer ver posts "peculiares", eles vão estar desfocados (com um blur). Se você souber abrir o inspetor do DOM de seu browser e procurar direito vc consegue desabilitar esse blur.

### var():

É usada para atribuir variables ao CSS, que podem ser de global ou local scope. Usar variables facilita a leitura do código e deixa o trabalho com javascript mais versátil.

```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body {
  background-color: var(--blue);
}
```

### Media Queries:

É um recurso do CSS que perimite você modificar a aparência do site (as properties dos elementos) e acordo com o tamnho da tela (entre outros parâmentros). Assim, por exemplo, se eu tiver uma imagem grande ela só vai ser mostrada quando abrirem o site pelo computador (monitor) e quando abrir o site pelo celular uma versão menor da imagem será mostrada.

```css
/* Big tablets to smaller laptop screens*/
@media only screen and (max-width: 1200px) {
  /*Quando a tela tiver 1200px de width ou menos, tudo aqui dentro será aplicado.*/
}

/* Smaller tablets to larger tablet screens*/
@media only screen and (max-width: 1023px) {
  /*Quando a tela tiver 1023px de width ou menos, tudo aqui dentro será aplicado.*/
}

/*Larger phones to smaller tablet screens */
@media only screen and (max-width: 767px) {
  /*Quando a tela tiver 767px de width ou menos, tudo aqui dentro será aplicado.*/
}

/* smaller to larger mobile phones*/
@media only screen and (max-width: 480px) {
  /*Quando a tela tiver 480px de width ou menos, tudo aqui dentro será aplicado.*/
}
/* Para telas maiores que 1200px o estilo aplicado será o que está fora das media queries */
```

Cada dispositivo tem uma tamanho de "tela útil" diferente, porém pode-se generalizar algumas width's:

- celular/smatphone: de 0px até 480px
- Tablet (em pé): de 480px até 768px
- Tablet (deitado): de 768px até 1024px
- notebook: de 1024px até 1200px
- Monitores/televisores: acima de 1200px

Sites responsivos são fortementes influênciados por media queries e pelo flexbox model.

## Flexbox:

É uma metodologia/layout que facilita a aplicação de layout responsivo de maneira mais fácil. Para comeaçar usar flexbox defina o display de um block element (divs, articles, o proprio body, etc) com "flex". Os child elements (que estão dentro da div que é flex) automaticamente ficam do tipo flex. As propriedades especificas/caracteristicas de um elemento flex são: `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items` e `align-content`.

- `flex-direction` vai dizer em que direção os child elements(divs) vão se amontoar (veja os exemplos de flex-direction row e column na internet). Por padrão ele usa row.
- `flex-wrap` No caso do flex-drirection for row, quanto tiver elementos demais para caber em uma linha o flex-wrap vai automaticamente passar o proximo elemento para outra linha, na mesma formataçao "bonitinha" (É simplismente essencial você ver exemplos ou testar esses conceitos)
- `flex-flow` é a junção das duas properties citadas a cima. ex: `flex-flow: row wrap;`
- `justify-content` é ideal para escolher a posição de início dos elementos. Por padrão usa-se o `flex-start`. Por exemplo, para centralizar tudo no meio usa-se simplismente o value "center".
- `align-items` serve para alinhar o conteúdo de maneira vertical e horizontal. Ex: `align-items: center;` vai deixar os elementos no centro da altura da div. Para separa-los separadamente de maneira simétrica podemos usar junto o `justify-content: space-around;`
- `align-content` é a mais confusa, mas de maneira resumida serve para alinhar as linhas dos elementos. Da pra deixar uma coluna do lado esquerdo e outra do lado direito, com um espaço no meio se usar-mos `flex-direction: column;` e `align-content: space-between;`

As properties especificas/caracteristicas de um child elemente de um flex element são:

- `flex` é uma combinação de `flex-grow` (da uma proporção de quanto um elemento vai crescer em coparação com os outros. O padrão é 1), `flex-shrink` (da uma proporção de quanto um elemento vai diminuir/encolher em coparação com os outros. O padrão é 1) e `flex-basis` (dizo comprimento inicial de um element). Quando faz-se `flex: 100%;` o element vai se alongar por toda a linha (como as navbars ficam em celulares)
- `align-self` vai fazer o alinhamento vertical de um objeto em específico (vai sobreescrever a formatação do `align-items` (que faz a mesma coisa, só que para todos os elementos)).

## Grid:

CSS grid vem com a proposta de servir como a base/padrão de todos os sites, sendo responsável por criar a "estrutura" do site de uma maneira "tabular". Promove a separação do site em pequenas células de uma tabela (tipo excel), alinhado e configurando elementos dentro dessas células. Para usar você tem que definir um container como grid. Para isso faça: `display: grid;`. Além disso você precisa definir o tamanho das linhas com: `grid-template-rows`, e as colunas com: `grid-template-columns`. Depois disso basta colocar os child elements dentro da grid com `grid-column` e `grid-row`.

### Properties do grid container

- `grid-template-columns` e `grid-template-rows`: determinar o número, nome e tamanho das grid colmuns e lines, respectivamente.

  ```css
  .g-container {
    display: grid;
    grid-template-columns: [first] 1fr [sec] 1fr [third] 1fr; //3 colunas, cada uma com 33% da tela
    grid-template-rows: [one-row] 50px; //uma linha.
    background-color: brown;
  }
  ```

- `grid-template-areas`: Serve para criar uma área na grid (conjunto de células). Você deve usar `grid-template-area` dentro do `grid-container` e especificar um nome para as áreas, além de dizer quais células vão pertencer a essa área.

```html
<div class="g-container">
  <div class="item item-1">a</div>
  <div class="item item-2">b</div>
  <div class="item item-3">c</div>
</div>
```

```css
.g-container {
  display: grid;
  grid-template-columns: [first] 1fr [sec] 1fr [third] 1fr;
  grid-template-rows: 200px 200px 200px;
  grid-template-areas:
    "header header sidebar"
    "main main sidebar"
    "main main sidebar";
  /*repare acima que é como se fosse um mapa, dizendo o que cada canto da div é*/
}
/* repare que existem 9 celulas e somente 3 divs e mesmo assim tudo se encaixa */
.item-1 {
  grid-area: header;
  background-color: royalblue;
}
.item-2 {
  grid-area: main;
  background-color: seagreen;
}
.item-3 {
  grid-area: sidebar;
  background-color: slateblue;
}
```

- `column-gap` e `row-gap`: diz o espaço entre cada coluna e linha, respectivamente. Alternativamente você pode usar `gap` para para passar os 2 valores em um linha só.

- `justify-items`: vai alinhar os itens/conteúdo dentro de uma célula em relação à horizontal (se fica na esquerda, na direita etc)
- `align-items`: vai alinhar os itens/conteúdo dentro de uma célula em relação à vertical (se fica em cima, em baixo etc)
- `place-items`: usado para declarar align-items e justify-items (nessa ordem) em um só comando.
- `align-content` e `justify-content`: funcionam do mesmo jeito que o justify-items e o align-items, porém é aplicado em todo conjunto "tabela".

### Properties dos grid-items

- `grid-column-start` e `grid-column-end`: Tem sentido literal. Serve para definir o tamanho de um item dentro de uma grid, sem ter que fazer uma `<div>` para cada célula da grid. Basciamente você diz qual o nome ou numeração da coluna onde começa e nome/número da coluna onde termina. Você também pode usar "span x", onde x é quantidade de colunas pelo qual o elemento vai ocupar apartir do ponto inicial.

- `grid-column`: serve para "unir" esses dois comandos. Primeiro você define a linha vertical de início e, dividido por uma barra coloca a ultima linha vertical. Ainda é possivel usar o "span"

- `grid-row-start` e `grid-row-end`: Tem sentido literal. Serve para definir o tamanho de um item dentro de uma grid, sem ter que fazer uma <div> para cada célula da grid. Basciamente você diz qual o nome ou numeração da linha onde começa e nome/número da linha onde termina. Você também pode usar "span x", onde x é quantidade de linhas pelo qual o elemento vai ocupar apartir do ponto inicial.

- `grid-row`: serve para "unir" esses dois comandos. Primeiro você define a linha horizontal de início e, dividido por uma barra coloca a ultima linha horizontal. Ainda é possivel usar o "span".

```html
<div class="z-container">
  <div class="itemA">a</div>
  <div class="itemB">b</div>
</div>
```

```css
.z-container {
  border: 1px solid black;
  display: grid;
  grid-template-columns: 200px 200px auto 200px 200px;
  grid-template-rows: 100px 120px 140px;
}
.itemA {
  grid-column: 2 / span 3;
  grid-row: 1 / 2;
  background-color: blue;
}
.itemB {
  grid-column: 1 / 6;
  grid-row: 3 / 4;
  background-color: chartreuse;
}
```

- `grid-area`: já foi utilizada num exemplo anterior, mas basicamente ela vai criar uma área que vai ser ter atribuida ao item (selector) que estiver com essa property. No geral: `grid-area: <row-start> / <column-start> / <row-end> / <column-end>;`

- `align-self`: vai alinhar um grid-item em relação a célula em que está contido (verticalmente)
- `justify-self`: vai alinhar um grid-item em relação a célula em que está contido (horizontalmente)
- `place-self`: define as duas propriedades align-self e justify-self em um único comando. O primeiro valor é o align-self e o segundo é justify-self.

### Sizing functions:

A função `minmax()` vai definir um valor minímo e um máximo que uma coluna ou linha pode ter de "grossura". É uma boa prática sempre usar essa função

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
}
```

Já a função `repeat()` serve para evitar de escrever desnecessáriamente. Exemplo:

```css
/* modo ruim */
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

/* rescrito mais facilmente como: */
grid-template-columns: repeat(8, 1fr);

/* DEVE SER ESCRITO COMO: */
grid-template-columns: repeat(8, minmax(10px, 1fr));
```

### Fluid columns:

Para que você consiga ter uma grid onde o número colunas em uma linha varia de acordo como o espaço disponível, você deve usar minmax.

```html
<div class="grid">
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
  <div>
    Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
    aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
    incidunt rem fugit reprehenderit
  </div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}
.grid > div {
  background: #ede7f6;
  padding: 1.5rem;
  border-radius: 1rem;
}
body {
  margin: 2rem;
  font: 12px system-ui;
}
```

## Conclusão:

Esse foi um resumo sobre CSS. Se você acha um site bonito ou agradável com certeza é devido ao CSS, direta ou indiretamente. Para aprender/pesquisar mais sobre cheque os links abaixo. Para ver/fazer um projeto dê uma olhada no meu repo de projetos.

- [w3schools sobre css](https://www.w3schools.com/css/default.asp)
- [Mozzila sobre css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [css-tricks para se aprofundar](https://css-tricks.com/)
- [google para pesquisar](https://google.com)
