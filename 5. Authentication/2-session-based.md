# Session Based Auth

O processo de envio dos dados (nome/username/email e senha) é o mesmo que o do basic auth. O interessante nesse modelo é como a ideia de *Realms* é implementada.

## Como funciona
Usuário manda informações de login para o server, o server vê que elas estão corretas e manda resposta 200 OK. Básico, simples. A diferença aqui é, além do conteúdo requisitado, também e recebido pelo cliente (enviado pelo servidor) uma string aleatória e única que serve para indentificar você.

O server gera essa string e guarda ela, seja em cache, database, filesystem. O cliente também guarda essa string (chamada de session-id) seja em forma de cookies ou no local storage (se os cookies estiverem desabilitados).

Enquanto você tiver o seu session-id (e ele não expirar) e enquanto o server tiver seu session-id (e ele não expirar), você está autenticado e pode acessar os recursos protegidos do server. Existe um tempo limite que esse session-id fica guardado no servidor, variando desde 7 dias até 1 ano (claro, existem outros intervalos possiveis).

Em termos de analogia é como se, ao entrar em um cinema, você recebesse uma espécie de passe/ingresso. Você pode ir para qualquer local dentro da sala de cinema. Enquanto você estiver dentro do cinema e dentro do prazo no ingresso vc está Ok. Quando o tempo expirar ou você sair do cinema (você limpar o histórico do navegador ou propositalmente/conscientemente apertar o botão para fazer log off (em pleno 2077, quem faz isso..)) o server vai jogar fora o session-id.

O browser idealmente limparia esse session-id do cliente também, mas mesmo que não o faça, vc n terá acesso. As duas partes precisam ter o id: tanto o cliente quanto o servidor. E para cada login um novo session-id é gerado.
