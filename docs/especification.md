# Especificações do Projeto

## 1 Personas

### 1.1 Perfil 01: Adotantes

**Descrição:**                       
Pessoa maior de 18 anos que queira adotar um pet

**Necessidades:**                
- Plataforma prática e segura de divulgação de animais domésticos para adoção
- Acesso a filtros de compatibilidade entre o estilo de vida do adotante e as necessidades do pet
- Suporte na Pós-Adoção

### 1.2 Perfil 02: Doadores (ONGs)

**Descrição:**  
ONGs e pessoas físicas que realizam resgates e tem animais para doação

**Necessidades:**   
- Maior visibilidade para os animais disponíveis para adoção 
- Possibilidade de avaliar o perfil do adotante
- Plataforma para cadastrar e divulgar animais disponíveis para adoção
- Facilidade na organização de eventos de adoção
- Manter um registro centralizado de todos os adotantes para acompanhamento posterior
- Criar conteúdos educativos sobre adoção responsável e cuidado com os animais 

### 1.3 Perfil 03: Voluntários

**Descrição:**  
Pessoa que deseja realizar trabalho voluntário em ONGs de resgate animal

**Necessidades:**   
- Conhecer as ONGs que atuam nas proximidades
- Saber quais ONGs estão precisando de voluntários e para qual tipo de trabalho

## 2 Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... [PARTE]| QUERO/PRECISO ... [O QUE] |PARA ... [PARA QUE]                 |
|--------------------|------------------------------------|----------------------------------------|
|Adotante | encontrar um pet compatível com meu estilo de vida por meio de um sistema de recomendação.| garantir que o animal se adapte bem ao meu ambiente e rotina.              |
|Adotante       | desejo salvar animais favoritos em uma lista separada              | possa voltar facilmente e comparar as opções com calma. |
|Adotante       | acessar informações detalhadas sobre o histórico de saúde e comportamento do pet.| tomar uma decisão consciente e responsável na adoção. |
|ONG/Protetor| manter um registro centralizado dos adotantes | realizar acompanhamento posterior à adoção |
|ONG/Protetor| cadastrar animais disponíveis para adoção de forma rápida e organizada. | aumentar as chances de encontrar lares responsáveis para animais resgatados. |
|ONG/Protetor| divulgar eventos e feiras de adoção na plataforma. | alcançar mais pessoas interessadas e facilitar o processo de adoção. |
|ONG/Protetor| quero acessar relatórios com dados sobre interações, visualizações e êxito nas doações | possamos otimizar nossa comunicação e aprimorar as campanhas, ajudando mais animais a encontrar um lar acolhedor. |
|Voluntário| se cadastrar na plataforma para oferecer suporte a ONGs. | contribuir para o bem-estar dos animais por meio de ajuda direta. |
|Voluntário| saber quais ONGs atuam na minha região e de qual tipo de ajuda necessitam | saber de que forma e a quem consigo ajudar. |
|Voluntário| receber notificações e atualizações sobre as necessidades urgentes das ONGs em minha região | eu possa intervir rapidamente e oferecer ajuda de forma certeira.|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
