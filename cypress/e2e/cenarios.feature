# language: pt

Funcionalidade: Pesquisa de Processos

  Como um usuário que deseja consultar processos  
  Quero buscar um processo pelo seu objeto, número e órgão  
  Para encontrar rapidamente as informações desejadas  

  Cenário: Usuário realiza a busca de um processo  
    Dado que estou na página de pesquisa de processos  
    Quando informo os detalhes do processo que desejo buscar  
    E realizo a pesquisa  
    Então devo visualizar o processo correspondente nos resultados

//Pesquisar aba eventos

Funcionalidade: Pesquisa de eventos na página Aprenda

  Cenário: Buscar um evento específico
    Dado que o usuário acessa a página "Aprenda"
    Quando ele digita o nome do evento no campo de pesquisa e pressiona Enter
    Então o sistema deve exibir o evento correspondente nos resultados

// Pesquisar Documentação do portal


Funcionalidade: Biblioteca de Dados

  Como um usuário do sistema
  Quero buscar documentos na aba "Documentação do Portal"
  Para acessar rapidamente informações relevantes

  Cenário: Buscar Portaria SEGES/ME Nº 10.988 na Documentação do Portal
    Dado que o usuário acessa a tela "Biblioteca de Dados"
    E seleciona a aba "Documentação do Portal"
    Quando ele digita "Portaria SEGES/ME Nº 10.988" no campo de pesquisa
    E confirma a busca
    Então o sistema deve exibir "Portaria SEGES/ME Nº 10.988" nos resultados

// Pesquisar por consultores

Funcionalidade: Pesquisa por Consultores

  Cenário: Pesquisar pelo consultor "Amado"
    Dado que o usuário acessa a página de consultores
    Quando ele pesquisa por "Amado"
    Então o sistema exibe "Amado" nos resultados

// Busca Vaga

Funcionalidade: Busca de Vagas

  Cenário: Pesquisar vagas 
    Dado que o usuário acessa "Trabalhe Conosco"
    Quando busca por "QA"
    Então deve ver pelo menos uma vaga com link válido


// Pesquisa aba "Documentos"


Funcionalidade: Consulta de Documentação

  Cenário: Pesquisar um documento na Biblioteca de Dados
    Dado que o usuário acessa a tela inicial
    Quando ele clica na aba "Documentos"
    E acessa "Documentação do Portal"
    E busca por "Portaria SEGES/ME Nº 10.988"
    Então o sistema deve exibir o documento correspondente

  Cenário: Pesquisar na Documentação do Portal  
    Dado que o usuário acessa a aba "Documentação do Portal"  
    Quando ele pesquisa por "Portaria SEGES/ME Nº 10.988"  
    Então o sistema deve exibir o documento correspondente  

  Cenário: Pesquisar eBook  
    Dado que o usuário acessa a aba "eBook"  
    Quando ele pesquisa por "Lei Federal 14.133"  
    Então o sistema deve exibir o eBook correspondente  

  Cenário: Pesquisar legislação  
    Dado que o usuário acessa a aba "Legislação"  
    Quando ele pesquisa por "Lei nº 10.520"  
    Então o sistema deve exibir a legislação correspondente  

  Cenário: Pesquisar manuais do sistema  
    Dado que o usuário acessa a aba "Manuais do Sistema"  
    Quando ele pesquisa por "Manual dos Consultores"  
    Então o sistema deve exibir o manual correspondente  

  Cenário: Pesquisar redes sociais  
    Dado que o usuário acessa a aba "Redes Sociais"  
    Quando ele pesquisa por um termo específico  
    Então o sistema deve exibir os links correspondentes  








