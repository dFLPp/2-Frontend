# Autenticação básica

O conceito é simples. Você tem um recurso precioso ou atividade que é custosa de se realizar. Para que pessoas mal intencionadas não acessem o recurso e/ou para que pessoas sem permissão realizem ou façam a requisição de tal ativadade, é aplicada autenticação. Você só pode acessar essa informação se você tem **crendenciais** ou **permissões** para tal ou Você só pode pedir para realizar essa atividade se tiver tais **atribuições** ou **papeis**.

## Passo a passo

O recurso do servidor (AKA site) que você está tentando acessar pede nome e senha para carregar. Ao dar essas informações o cliente (você/seu computador/seu browser) vai mandar uma requisição com essas credenciais que você passou no cabeçalho da requisição HTTP (como se você estivesse enviando uma carta onde a primeira coisa escrita são seu nome e senha).

Como a internet é terra de niguém e você com certeza absoluta está a menos de 4 quilometros de mães solteiras, o browser se vê na necessidade de fazer a encriptação dessas informações antes de enviar/imbuir ela no header. Quando a requisição chegar no server, ele vai des-encriptar e comparar em sua base dados: "esse nome e essa senha existem e/ou estão corretos"?

Se tudo der certo você recebe (o server envia) uma requisição HTTP com código 200 OK e em seu corpo o conteúdo que foi requisitado. Se não deu certo, o server envia uma requisição HTTP com código 401 Unauthorized.

## Realms

Realms são um conjunto de páginas que utilizam do mesmo tipo de credencial. Por exemplo, ao logar no youtube você tem acesso à pagina inicial, a todos os vídeos públicos e aos canais, todos esses endereços consomem a mesma credencial. Contudo se você tentar acessar o youtube studio de algum youtuber vc n consegue: são necessários outros tipos de credenciais.

## Como é na prática

Basic auth ocorre quando vc tenta entrar em um site mas ele não carrega. A página fica toda branca e um quadrado preto aparece na parte central superior da tela, pedidndo as credenciais.

Quando as credenciais forem informadas elas vão ser encriptadas em base64 (um tipo de encriptação) e então vai ser motado a linha: "Authorization: Basic \[seu login encriptado\]" que então é adicionado no cabeçalho da requisição HTTP.

Como o algoritimo de encriptação é bem fraco, qualquer homem divorciado que more a menos de 400 metros de você consegue intercptar a mensagem e obter suas credenciais. Contudo, basic auth é base para todos os demais tipos de Autenticação. Como ela pode ter uma falha tão fundamental e ainda assim ser usado? A resposta é: TLS e HTTPS.

Se não sabe o que é TLS e HTTPS a essa altura do campeonato, dê uma olhada nas minhas anotações sobre internet. Mas, de maneira resumida, quando você acessa um site que tem o "cadeadozinho" fechado e/ou verde, significa que existe outra camada de autenticação em cima da feita em base64 (essa outra camada é feita a nivel de networking), ou seja, é seguro.
