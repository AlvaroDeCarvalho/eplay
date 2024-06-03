
# Meu Projeto
  Este projeto é um e-commerce voltado para gamers, desenvolvido como parte de um trabalho acadêmico pela turma da UNIPE, para a disciplina de Análise e Projeto de Sistemas , ministrada pelo Professor Ricardo Roberto De Lima


## Índice

- [Requisitos](#Requisitos)
- [Modelo de Dados](#ModelodeDados)
- [Metodologia Rprocess](#MetodologiaRprocess)
- [Protótipo](#Prototipo)
- [Regras de negócio](#RegrasNegocio)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#Licença)
- [Autores](#autores)
- [Agradecimentos](#agradecimentos)


## Requisitos:

#### Funcionais:
-Exibir produtos
-Adicionar os produtos ao carrinho
-Exibir promoções
-Exibir categorias do produto
-Exibir os produtos adicionados ao carrinho
-Exibir preço dos produtos
-Exibir valor final das compras(soma dos valores dos produtos que foram adionados ao
carrinho)
-Remover produtos do carrinho

#### Não-funcionais:
-O programa deve ser implementado em Javascript
-Cores da interface: Cinza, preto, branco, verde
-Software Multiplataforma
-Modelagem UML em StarUML


## Modelo de Dados

-Diagramas(UML, Entidade e Relacionamentos, Lógico)
- [DiagramasProjeto.zip](https://github.com/user-attachments/files/15529452/DiagramasProjeto.zip)


## Metodologia Rprocess

#### Critérios aceitos:

Funcionalidade:
1. Links e Botões: Todos os links e botões funcionam corretamente e levam o usuário à
página correta.
 ◦ Carrinho de Compras: É possível adicionar, remover e alterar a quantidade de
produtos no carrinho de forma eficiente.
 2. Performance:
 ◦ Carregamento: As páginas do site carregam rapidamente, mesmo com múltiplos
produtos exibidos.
 ◦ Compatibilidade: O site é compatível com os principais navegadores (Chrome,
Firefox, Safari, etc.).
 3. Conteúdo:
 ◦ Precisão das Informações: Todas as informações exibidas, como preços e
descrições de produtos, estão corretas e atualizadas.
 ◦ Ortografia e Gramática: O texto no site está livre de erros gramaticais e ortográficos,
deixando-o ainda mais fácil na utilização do usuário
 4. Experiência do Usuário:
 ◦ Feedback Positivo: O site foi testado por um grupo de usuários e recebeu feedback
positivo sobre a usabilidade e design.
 ◦ Facilidade de Uso: Novos usuários são capazes de navegar e realizar uma compra
sem dificuldades significativas.

#### Critérios de uso:

Navegação e Usabilidade:
 ◦ Clareza e Simplicidade: site fácil de navegar com categorias bem definidas como
"Categorias", "Novidades", "Promoções".
 ◦ Barra de Pesquisa: Disponibilidade de uma barra de pesquisa para facilitar a
localização de produtos específicos.
 ◦ Carrinho de Compras: O ícone do carrinho de compras claramente visível e fácil de
acessar, mostrando o número de itens no carrinho.
 2. Informações de Produtos:
 ◦ Detalhamento: Cada produto tem uma descrição detalhada, incluindo o preço,
descontos (se houver), e uma imagem clara do produto.
 ◦ Categorias e Filtros: Produtos devem ser categorizados corretamente (RPG, Ação,
Esportes, etc.) e filtros devem estar disponíveis para ajudar na busca.
 3. Processo de Compra:
 ◦ Facilidade: O processo de compra deve ser intuitivo, com passos claros para
adicionar itens ao carrinho e finalizar a compra.
 ◦ Formas de Pagamento: Boleto e cartão de crédito, aos quais anteriormente á
conclusão, o preenchimento de dados é obrigatório, e para cartão, preenchimento de
dados do dono do cartão também é, incluindo parcelamento, como mostrado no EPLAY
 4. Design e Estética:
 ◦ Aparência: O site tem um design moderno e atraente, utilizando cores e imagens de
alta qualidade.
 ◦ Responsividade: O site é responsivo e funciona bem em diferentes dispositivos e
tamanhos de tela.
 5. Segurança e Privacidade:
 ◦ Proteção de Dados: As informações dos usuários são protegidas por criptografia e
políticas de privacidade claras estaão disponíveis.
 ◦ Certificados: Uso de certificados de segurança (HTTPS) para proteger transações
online.

#### Caso de uso de usuário:

Ator Principal
 • Usuário (cliente do site)
Objetivo
 • Comprar um jogo de videogame através do site.
Pré-condições
 • O usuário deve ter acesso à internet e um dispositivo compatível (computador, tablet,
smartphone).
 • O usuário deve possuir uma forma de pagamento válida.
Pós-condições
 • O jogo é adicionado ao carrinho de compras.
 • O usuário realiza o pagamento e recebe uma confirmação da compra.

#### História de usuário:

- Usuário cai no site e após navegar pelas abas e conseguir escolher entre categorias
distintas, escolhe o game e pede para o pai comprar com o seu cartão de crédito. O
cadastro no site é feito com os dados do usuário gamer, que cadastra seu nome
completo, e-mail, cpf, que após cadastrar e escolher a forma de pagamento desejada
(cartão de crédito), os dados do PAI que agora devem ser cadastrados, que no caso, são
os dados do cartão como nome do titular, numero de segurança, entre outros, que após
finalizada, o gamer receberá a confirmação da compra em seu e-mail, e seu pai
comseguirá visualizar a cobrança em sua fatura, á depender de quantas vezes foi
parcelado ou não. Caso claro de site super claro para qualquer usuário e de fácil
entendimento e objetividade.


## Protótipo

#### Figma:

- [Figma](https://www.figma.com/design/FiFpwvwwHX0rCbrXatjMg4/EPLAY?node-id=1-3&t=8EA9tb40JQ65zbBu-0)


## Regras de Negócio:

#### Tabela de Identificação:
- [TabelaIdentificacao.zip](https://github.com/user-attachments/files/15529963/TabelaIdentificacao.zip)


## Instalação

#### Setup de ambiente:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (Node.js)

## Passos para rodar na minha máquina:

### ``clone do repositorio``

#### ``git clone``
Clone o este repositorio com o comando `git clone https://github.com/AlvaroDeCarvalho/eplay.git`

#### ``npm i``
instale as dependências que o projeto consome:
  - redux toolkit query (pacote json para transição de propiedades entre componentes)
  - styles-componentes (estilização atravês do typescript)
  - react-rounter-dom (navegação da aplicação)
  - react-rounter-hash-link (direcionamento dos links)
  - eslint e prettier (para padronização de codigo)
  - yup e formik (para a validação e logica dos formularios)

 #### ``Abrir sistema``
 - npm start
 - Click no link em local
 - [localhost:3000](http://localhost:3000)

## ``1. Uso``

#### ``1.1 Aceitar os termos``
Ao acessar e utilizar o eplay  você concorda em cumprir e ficar vinculado aos seguintes Termos de Uso. Se você não concorda com estes termos, por favor, não utilize nosso site.



## ``2. Uso do site``

#### ``2.1. Licença Limitada``
Concedemos a você uma licença limitada, não exclusiva e intransferível para acessar e usar o eplay para fins pessoais e não comerciais.

#### `2.2. Proibições`
Você concorda em não:

Utilizar o site para qualquer propósito ilegal ou não autorizado.
Violar quaisquer leis em sua jurisdição (incluindo, mas não limitado a, leis de direitos autorais).
Reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do site sem nossa permissão expressa por escrito.

## ``3. Compras``
#### ``3.1. Processo de Compra``
Ao fazer uma compra no [Nome do E-commerce], você concorda em fornecer informações válidas e precisas. Todos os pedidos estão sujeitos à nossa aceitação. Reservamo-nos o direito de recusar ou cancelar qualquer pedido a nosso critério.

#### ``3.2. Entrega Digital``
Após a confirmação do pagamento, você receberá um link de download ou um código de ativação para o jogo adquirido. É sua responsabilidade garantir que seu dispositivo é compatível com o jogo comprado.

## ``Contribuição``

Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Minha nova feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

Por favor, certifique-se de atualizar os testes conforme necessário.

## ``Licença``

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ``Autores``

- [FrontEnd] **Alvaro De Carvalho Segundo Neto**
- [Documetation] **Lara Lopes e Leonardo Sobrinho**
