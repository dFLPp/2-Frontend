# Tutorial ultra conciso sobre HTML

## Alguns esclarecimentos antes de começar

- ### O que é HTML?

  HTML = Hyper Text Markup Language; é uma maneira estruturada de enviar/transferir texto (e outras midias) através da internet. É como se fosse a gramatica que os sites usam, dessa forma servindo para estruturar uma página na internet.

- ### HTML e HTTP, qual sua história?

  HTML e HTTP são duas tecnologias "irmãs", foram criadas na CERN, um laboratório que fica debaixo da terra lá na Europa, de modo a serem complementares. Enquanto HTML é o conteudo transmitido na internet, HTTP é uma forma de transmitir esse conteudo. Em analogia, se HTML é um carro, HTTP é a estrada que leva o carro ao seu destino.

- ### Ainda é útil aprender isso atualmente?

  Sim. Além de ser bem simples de entender, tecnologias e plataformas modernas como as no-code e as low-code, bem como sites já conhecidos (wordpress por exemplo) usam e abusam dessa ferramenta. No mundo da programação, nenhuma tecnologia é definitiva, tanto que o HTML já está em sua quinta versão (HTML5), mas ter bons fundamentos na tecnologia que deu origem a internet não pode ser desvantagem não é msm?

- ## Mindset & Inglês
  Uma coisa precisa ficar clara é: você não precisa decorar/memorizar/anotar nada. Foque em tentar entender e principalmente tentar aplicar os conceitos.
  Outra coisa importante é que, você não precisa saber inglês para programar, mas precisa se acostumar com o fato de que tudo está em inglês. É como escutar músicas internacionais, você pode não entender a letra mas mesmo assim se satisfaz com ela.

<br/>
<br/>

## Estrutura básica do arquivo HTML

HTML é um arquivo, tipo texto, que é enviado pela internet, mas como a internet consegue diferenciar o HTML de outros arquivos de texto aleatórios? Além da extensão diferenciada (.html) o HTML tem uma forma única de separar o seu conteúdo. Vamos ver isso ao invés imaginar. No bloco de código abaixo você verá a estrutura básica, todo texto que estiver em verde são comentários que eu fiz para deixar a explicação mais dinâmica, a internet ignora eles.

```HTML
<!DOCTYPE html> <!-- Todo arquivo HTML começa com essa linha, está dizendo à internet: esse arquivo é HTML -->

<html lang="br"> <!--Abre o arquivo html com dada linguagem-->
<head> <!-- Dentro do head ficam metadados. Metadados = informações adicionais -->
    <meta charset="UTF-8"> <!-- indica que caracteres do documento podem usar emojis, acentos e caracteres diversos-->
    <title>Primeira página em HTML</title> <!-- É o nome da página, um tipo de metadado-->
    <link rel="stylesheet" href="/path"> <!-- Importando arquivos de estilo (css), mas poderiam ser fontes ou outras coisas-->
</head>
<body> <!-- Dentro do body fica o conteudo que as pessoas podem ver-->
   <p>Isso é um paragrafo</p>
   <script src ="/path"> </script> <!-- Normalmente vc importa arquivos javascript no final pq vc quer q toda a pagina carregue antes -->
</body>
</html> <!--Fecha o arquivo html-->
```

> Recomendação:<br/>
> Crie um arquivo no seu computador e dê a ele o nome _arquivo.html_
> Abra essa arquivo com o bloco de notas do seu computador ao clicar nele com o botão direito, ir na opção "abrir com" e escolher o bloco de notas. Então copie o codigo acima codigo dentro do arquivo, e retire todos os comentários (parte em verde). Analise o arquivo.

Você dever ter percebido que o codigo tem varias palavras em azul que são escritas 2 vezes, tendo alguma entre elas. Essa é a estrutura de \<tags\> do html.
Uma tag é um palavra especial que faz alguma coisa especial. Ela sempre está envolta em < > se for a primeira vez que ele aparecer ou < /> se for a segunda vez.

Um par de tags, uma de abertura (<>) e outra de fechamento (</>), formam um Elemento. É assim que o html funciona. E é por ser diferente que a internet (HTTP) interpreta ela corretamente.

```HTML
<p>Isso é um elemento que representa um paragrafo. Existem varios elementos diferentes e eles podem ter propriedades diferentes, mas sempre tem algo em comum.</p>
```

As 3 principais propriedades que todos os elementos tem são:

- style: dita a aparência do elemento
  ```HTML
  <p style="color: pink;">texto rosa</p>
  <p style="color: red;">texto vermelho</p>
  ```
- id: dá um indentificador único para um elemento, tipo seu CPF
  ```HTML
  <p id="pergunta">Quanto é 2+2?</p>
  <p id="resposta">4</p>
  ```
- class: forma de agrupar varios elementos.

  ```HTML
  <p class="pergunta" id='p1'>Quanto é 2+2?</p>
  <p class="resposta" id='r1'>4</p>

  <p class="pergunta" id='p2'>Quanto é 5+7?</p>
  <p class="resposta" id='r2'>12</p>
  ```

> OBS: <br/> O nome que você dá para "id" e "class" não pode ter caracteres especiais como espaço ou acentos.

> OBS2: <br/> Dentro do elemento, "class", "id" e "style" são chamados de attributes. Você deve dar valor aos attributes, que são chamados de values.

<br/>
<br/>

## Tá, mas como eu sei se estou fazendo certo?

Para verificar seu progresso ou ver como a cara de sua página está ficando você pode abrir o arquivo .html dentro do seu navegador. Explicando de maneira resumida, o google chorme, firefox, safari, etc são aplicativos especialistas em ler/abir o arquivo html.

O que os navegadores fazem é: pegam o nome do site que você quer entrar, pedem permisão ao "dono" do site e então usando HTTP (atualmente HTTPS) pegam os arquivos HTML dese site, leem ele, e mostram na sua tela.

Como o arquivo html é seu, você não precisa usar HTTP nem pedir permissão, basta abrir o arquivo ao clicar duas vezes em cima dele ou clicar com o botão direito, ir na opção "Abrir com" e escolher o seu navegador.
Ao fazer isso o html vai ser lido pelo seu navegador e toda aquela código dentro do arquivo vai ser traduzida em conteúdo que você consegue ler.

<br/>
<br/>

## Finalizando

Você só vai aprender e, principalmente, só vai conseguir aplicar HTML se você treinar e pesquisar sozinho - esse é o lema do programador. Essas anotações só servem para te dar intesse na tecnologia. Abaixo vou deixar links que você pode usar para conhecer as várias outras tags e elementos que o HTML tem além de formas de se aprofundar no assunto.

- [Mdn WebDocs](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Tutorial em video (Português) - Cursoemvideo](https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&ab_channel=CursoemV%C3%ADdeo)
- [Tutorial em video (Inglês) - FreeCodeCamp](https://www.youtube.com/watch?v=kUMe1FH4CHE)
- [As principais tags](https://htmlcheatsheet.com/)
