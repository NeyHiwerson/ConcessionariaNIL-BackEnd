# ConcecionariaNIL - Backend
## Projeto de um software de completo para concessionária de veículos
## Backend

Projeto em andamento
link do diagrama de entidade no figma:
https://www.figma.com/file/IAj0HG7Lw6rNWkmFXSiYHj/Concessionaria?type=whiteboard&node-id=0%3A1&t=mtARpWlhYTqJcSDc-1

npm install express pg bcrypt jsonwebtoken knex dotenv cors
npm install -D nodemon
npm install --save-dev jest

servidor Cyclic -> https://wild-lion-khakis.cyclic.app
database postgres -> silly.db.elephantsql.com




# Escopo do Projeto

## Plano de Gerenciamento do Projeto
- ScrumBan

## Documentação dos Requisitos
  ### Site -> Para exibição online do estoque.
  ### PDV Concessionária -> Para gerenciar estoque, clientes, vendas e NFe.
  ### BD -> Para persistir as informaçoes.
  ### Bucket -> Banco de imagens.
  ### API -> Para integrar Site, PDV, Bucket e BD.

## Justificativa (Genérica)
  #### A concessionária possuia apenas 1 loja e não tinha software de sistema de gerenciamento, fazendo todo cadastro de cliente e carro atraves de formularios de papel manualmente e enviando para o contador formalizar a venda e gerar a nota fiscal de compra do veiculo. Esse procedimento além de demorado é tambem de custo elevado e a loja não tem presença online pois não possuia site. A concessionaria esta abrindo uma 2° loja e quer um software para gerenciar seu estoque, clientes, registro de vendas, emitir NFe e um site para que seus clientes possam ver seu estoque disponível online.

## Restições
  - Orçamento limitado
  - Tempo: data de entrega 26/02/2024 - inauguração Loja2
  - Disponibilidade de recursos humanos extras para o desenvolvimento.

## Steakholders do projeto
  - Cliente do projeto: Claudia Werlich
  - Patrocinador do projeto: Entra21
  - Gerente do projeto: Claudia Werlich
  - Equipe do projeto:
      - Iago
      - Lorenzo
      - Ney Hiwerson Missias Ribeiro

---
---
## Site – Tem
- Exibição do catálogo dos carros
- Exibição de detalhes dos veículos
- Exibição de carrossel de imagens para cada veículo
- Formulário para contato para duvidas e reclamações
- Link whatsapp para contato direto
- Pesquisa avançada: utilização de filtros
## Site - Não tem
- Cadastro do cliente
- Setor para peças ou reparos
- Compras online (checkout)
- Fornecedores diferentes

---
---
## Concessionária - Tem
- Cadastro de Funcionários, Clientes e Veículos;
- Exibição de detalhes de veículos e clientes
- Área de atendimento a clientes online
- Pesquisas avançadas de clientes e veículos
- Área venda
- Consulta de cadastro de cliente
- Conclusão de venda com emissão de NFE
- Registro de venda
- Formulário para contato para duvidas e reclamações
## Concessionária - Não tem
- Setor de peças e oficinas de reparos
- Área de reclamação de clientes

---
---
#  Requisitos Funcionais:
## Site
- RF1: O site deve exibir uma lista de veículos disponíveis com detalhes (modelo, ano, preço).
- RF2: Os usuários devem poder filtrar informações veículos com base em critérios como marca, modelo, ano e valor.
- RF3: O site deve permitir que os usuários solicitem informações adicionais sobre um carro específico por meio de um formulário de contato.
- RF4: O site deve possuir um ícone wathsapp fixo no canto inferior direiro durante toda a navegação onde o cliente podera solicitar ajuda, exceto quando estiver vendo informações especificas de um veiculo que se ele apertar no ícone wathsapp vai ser pré carregada as informações do veiculo e anexada a mensagem.
- RF5: O site deve conter informações do endereço das nossas lojas assim como mapa da localização e link para abrir aplicativos gps para chegar ao local.

## Sistema Concessionária
- RF6: Página de login
- RF7: Página de cadastro do vendedor
- RF8: Página cadastro do cliente
- RF9: Página cadastro de novos carros no sistema
- RF10: Página de registro de venda
- RF11: Página de contato para duvidas e reclamações

---
#  Requisitos Não Funcionais:
## Site
- RF1: 

## Sistema Concessionária
- RF1: 