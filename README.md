Projeto Frontend — Fluxo de Checkout (Mockado)

Este projeto é uma aplicação web mockada que implementa o fluxo completo de checkout, seguindo o desafio da Colmeia.io. Ele é desenvolvido em Next.js 13, TypeScript, Tailwind CSS e ShadCN UI, com estado global gerenciado via Redux Toolkit.

🔹 Tecnologias Utilizadas

Next.js 13 (App Router)

React + TypeScript

Tailwind CSS

ShadCN UI

Redux Toolkit (estado global do carrinho)

LocalStorage (sessão de usuário mockada)

Componentização: CartItem, CheckoutForm, Header, Popover de usuário

🔹 Estrutura do Projeto
app/          → Rotas e páginas (catalog, cart, checkout, login)
components/   → Componentes reutilizáveis (Header, Footer, CartItem, CheckoutForm)
store/        → Redux Toolkit para gerenciamento do carrinho
mocks/        → Dados mockados de produtos e usuários
public/       → Imagens e arquivos estáticos
styles/       → Tailwind CSS

🔹 Fluxo do Usuário
flowchart TD
    A[Login / Cadastro] --> B[Catálogo de Produtos]
    B --> C[Carrinho]
    C --> D[Checkout]
    D --> E[Resultado do Pagamento]

    %% Login / Cadastro
    A -->|Usuário logado persistido em localStorage| B
    A -->|Bloqueio de checkout se não logado| C

    %% Catálogo
    B -->|Adicionar ao carrinho| C
    B -->|Comprar agora (direto)| D

    %% Carrinho
    C -->|Alterar quantidade / remover| C
    C -->|Concluir compra| D

    %% Checkout
    D -->|Passo 1: Dados do comprador| D
    D -->|Passo 2: Seleção de pagamento (Pix / Cartão / Boleto)| D
    D -->|Passo 3: Revisão e confirmação| D
    D -->|Passo 4: Simulação de pagamento| E

    %% Resultado do Pagamento
    E -->|Pago / Falhou / Expirado| D

🔹 Páginas e Funcionalidades
1️⃣ Login (/login)

Tela única para login com usuário mock:

const users = [
  { id: "1", name: "Renato", email: "renato@gmail.com", password: "123" }
];


Persistência da sessão no localStorage.

Redirecionamento automático para /catalog ou /checkout.

Bloqueio de checkout se usuário não estiver logado.

2️⃣ Catálogo (/catalog)

Lista de produtos mockados: ID, nome, imagem, marca, preço, descrição, rating, vendidos.

Funcionalidades:

Adicionar ao carrinho → atualiza Redux

Comprar agora → envia produto direto para checkout

Carrinho global persistente.

3️⃣ Carrinho (/cart)

Exibe itens adicionados com nome, marca, quantidade, preço unitário e subtotal.

Funcionalidades:

Alterar quantidade (+ / -)

Remover produtos

Calcular subtotal e total dinamicamente

Botão “Concluir compra” redireciona para checkout.

Feedback visual de vazio e atualizações.

4️⃣ Checkout (/checkout)

Formulário de dados do comprador (pré-preenchido com dados do usuário logado).

Seleção de método de pagamento:

Pix → campo de chave

Cartão → número, validade, CVV

Boleto → simula emissão do boleto

Resumo do pedido:

Produtos, quantidade, subtotal, frete, total.

Simulação do status do pagamento:

Inicial → Processando → Pago / Falhou / Expirado

Latência simulada com setTimeout

Feedback visual (loading, erro, sucesso)

Botão “Concluir Pagamento” dispara a simulação.

5️⃣ Header

Avatar com popover de logout via ShadCN UI.

Exibe email do usuário logado.

Atualiza estado quando o usuário desloga.

🔹 Funcionalidades Extras

Carrinho global com Redux Toolkit.

Login persistente usando localStorage.

Proteção de rotas: checkout só acessível para usuários logados.

Resumo de pedido dinâmico no checkout.

Simulação completa de status de pagamento com transições realistas.

Componentização e reutilização de UI consistente com ShadCN UI.

Responsividade básica e acessibilidade (foco, labels, navegação por teclado).

🔹 Fluxo Esperado (Resumo)

Login / Cadastro → validação e persistência no navegador

Catálogo → seleção de produto, adicionar ao carrinho ou comprar direto

Carrinho → revisão de itens, alteração de quantidade, remoção

Checkout:

Dados do comprador (pré-preenchidos)

Seleção de pagamento (Pix, Cartão, Boleto)

Revisão e confirmação

Simulação de pagamento com status inicial → processando → pago / falhado / expirado

Resultado do Pagamento → tela final mostrando sucesso ou falha.
