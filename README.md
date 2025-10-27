## **Projeto Frontend — Fluxo de Checkout Mockado**

Este projeto é uma aplicação web totalmente mockada que implementa o fluxo completo de checkout, conforme o desafio da Colmeia.io. Ele é desenvolvido em Next.js 13 com TypeScript, Tailwind CSS e ShadCN UI, utilizando Redux Toolkit para estado global do carrinho.

**Tecnologias Utilizadas**

- Next.js 13 (App Router)

- React + TypeScript

- Tailwind CSS

- ShadCN UI

- Redux Toolkit (gerenciamento global do carrinho)

- LocalStorage (simulação de sessão de usuário)

- Componentização: Cart, CartItem, CheckoutForm, Header, Popover de usuário, ProductCard,

**Estrutura do Projeto**

app/          → Rotas e páginas (catalog, cart, checkout, login)
components/   → Componentes reutilizáveis (Header, Footer, CartItem, CheckoutForm, Cart)
store/        → Redux Toolkit para gerenciamento do carrinho
mocks/products.ts        → Dados mockados de produtos
public/       → Imagens e arquivos estáticos

**Fluxo do Usuário**
flowchart TD
    A[Login / Cadastro] --> B[Catálogo de Produtos]
    B --> C[Carrinho]
    C --> D[Checkout]
    D --> E[Resultado do Pagamento]

    A -->|Usuário logado persistido em localStorage| B
    A -->|Bloqueio de checkout se não logado| C

    B -->|Adicionar ao carrinho| C
    B -->|Comprar agora (direto)| D

    C -->|Alterar quantidade / remover| C
    C -->|Concluir compra| D

    D -->|Passo 1: Dados do comprador| D
    D -->|Passo 2: Seleção de pagamento (Pix / Cartão / Boleto)| D
    D -->|Passo 3: Revisão e confirmação| D
    D -->|Passo 4: Simulação de pagamento| E

    E -->|Pago / Falhou / Expirado| D

**Páginas e Funcionalidades**

## Login (/login)

Tela única para login com usuário mock:

const users = [
  { id: "1", name: "Renato", email: "renato@gmail.com", password: "123" }
];


- Persistência da sessão no localStorage

- Redireciona automaticamente para /catalog ou /checkout

- Bloqueio de checkout se usuário não estiver logado

## Catálogo (/catalog)

- Lista de produtos mockados: ID, nome, imagem, marca, preço, descrição, rating, vendidos

- Funcionalidades:

- Adicionar ao carrinho (atualiza Redux)

## Carrinho global persistente

- Carrinho (/cart)

- Exibe itens adicionados com nome, marca, quantidade, preço unitário e subtotal

- Funcionalidades:

- Alterar quantidade (+ / -)

- Remover produtos

- Calcular subtotal e total dinamicamente

- Botão “Concluir compra” redireciona para checkout

- Feedback visual de vazio e atualizações

## Checkout (/checkout)

- Formulário de dados do comprador pré-preenchido com dados do usuário logado

## Seleção de método de pagamento:

- Pix → campo de chave

- Cartão → número, validade, CVV

- Boleto → simula emissão de boleto

- Resumo do pedido: produtos, quantidade, subtotal, frete e total

___________________________________________________________________________________________

**Detalhes:**

-> Simulação do status do pagamento: inicial → processando → pago / falhado / expirado

-> Botão “Concluir Pagamento” dispara a simulação de forma mockada

___________________________________________________________________________________________

## Header

- Avatar com popover de logout usando ShadCN UI

- Exibe email do usuário logado

- Atualiza estado quando o usuário desloga

## Funcionalidades Extras

- Carrinho global com Redux Toolkit

- Login persistente usando LocalStorage

- Proteção de rotas: checkout só acessível para usuários logados

- Resumo de pedido dinâmico no checkout

- Simulação completa de status de pagamento com latência realista

- Componentização e UI consistente com ShadCN UI

- Responsividade básica e acessibilidade (foco, labels, navegação por teclado)

## Fluxo Esperado

Login / Cadastro → validação e persistência no navegador

Catálogo → seleção de produto, adicionar ao carrinho ou comprar direto

Carrinho → revisão de itens, alteração de quantidade, remoção

Checkout:

Dados do comprador (pré-preenchidos)

Seleção de pagamento (Pix, Cartão, Boleto)

Revisão e confirmação

Simulação de pagamento com status inicial → processando → pago / falhado / expirado

Resultado do Pagamento → tela final mostrando sucesso ou falha, opção de tentar novamente
