# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t5-g3-turma5/blob/7588fed4739c49e1360139b3656c6b4b1cf397fd/docs/especification.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t5-g3-turma5/blob/7588fed4739c49e1360139b3656c6b4b1cf397fd/docs/interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O sistema deve permitir o cadastro de novos usuários.</li>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção..</li>
    <li>RF-004	O sistema deve permitir que ONGs cadastrem animais disponíveis para adoção.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Matheus</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do cadastro de pets</td>
  <td>
   <ul>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção.</li>
    <li>RF-004	O sistema deve permitir que ONGs cadastrem animais disponíveis para adoção.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo salvo com os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Quero divulgar um animal</li>
    <li>Preencher o cadastro</li>
   </ol>
   </td>
  <td>O cadastro deve ser salvo no localStorage e o pet cadastrado deve aparecer na página Quero adotar</td>
  <td>Luiz</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da página de adoção de pets</td>
  <td>
   <ul>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção.</li>
    <li>RF-005	O sistema deve permitir que adotantes filtrem animais com base em suas preferências.</li>
    <li>RF-007	O sistema deve permitir que usuários salvem itens como favoritos visíveis apenas para eles.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Livros.</li>
    <li>Visualizar as informações referentes aos livros disponíveis na página.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens das capas, referentes aos livros estão disponíveis na página Livros.</td>
  <td>João</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-001:	 O site deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".</td>
  <td>Silvia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
  <td>Maria</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar o cadastro de livros</td>
  <td>
   <ul>
   <li>RF-004	O site deve permitir ao usuário fazer o cadastro de livros.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de livros está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em “Cadastro de livros”, no menu.</li>
    <li>Visualizar a página Cadastro de Livros.</li>
    <li>Inserir as informações sobre o livro.</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Livro cadastrado com sucesso".</td>
  <td>João</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar o cadastro de tutores</td>
  <td>
   <ul>
   <li>RF-005	O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de tutores está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em “Cadastro de tutores”, no menu.</li>
    <li>Visualizar a página Cadastro de Tutores.</li>
    <li>Inserir as informações sobre o tutor.</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Tutoria cadastrada com sucesso".</td>
  <td>Beatriz</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar a página de Tutores</td>
  <td>
   <ul>
   <li>RF-008	O site deve permitir ao usuário visualizar os detalhes dos tutores.</li>
   </ul>
  </td>
  <td>Verificar os detalhes dos Tutores e visualizar seus respectivos perfis. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Tutores”, no menu.</li>
    <li>Visualizar a página "Tutores".</li>
    <li>Na página "Tutores", é possível visualizar os perfis com foto e informações dos tutores, além da barra de pesquisa acima dos perfis.</li>
  
   </ul>
   </ol>
   </td>
  <td>Deve ser possível visualizar todos os perfis de Tutores, com suas respectivas fotos e informações, além da visualização da barra de pesquisa acima dos perfis.</td>
  <td>Pedro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-09: Verificar a página de perfil de usuários cadastrados</td>
  <td>
   <ul>
   <li>RF-009	O site deve permitir ao usuário verificar as informações registradas no cadastro na página Perfil, após fazer seu login.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil.</td>
  <td>Silvia</td>
 </tr>
</table>
