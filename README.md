# spaangular
SPA criada em Angular 

Single Page Aplication que abre o componente home, onde exibe um botão de 'Novo cadastro', 
um de 'Listar funcionarios cadastrados' e outro de 'Esconder lista de funcionarios'.

O botão de 'Novo cadastro' redireciona por um routerLink para o componente Formulario
onde há um formulário(formField) de criação de novo cadastro e um botao de 'Voltar', que redireciona a rota para a home.

Os botões 'Listar funcionarios cadastrados' e 'Esconder lista de funcionarios' alteram o parametro da variável 'exibe'
para true e false respectivamente, que, atraves de um NgIf exibem ou não o componente ListaFuncionarios.

No componente ListaFuncionarios, é feita uma iteração no array de pessoas (ListaFuncionários) por um NgFor, para exibir 
a lista dos funcionários com seus contatos e com a foto arrendondada. 

*Componentes criados:*
home
listafuncionarios
formulário

*imports do Angular Material*
toolbar
botões
formField
input

*interpolação e property binding*
na iteração para exibir a lista de funcionarios, 
as propriedadades: Nome, email, contato2 e celular são interpoladas.
A propriedade urlFoto é property binding.

*diretivas NgIF e NgFor*
NgIf, para exibir ou não a tabela.
NgFor para iteração com um let of.