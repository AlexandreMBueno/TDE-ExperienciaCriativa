

// funcoes para os botoes do topo rolarem ate x parte da página

function scrollToHome() { //nome da funcao q eu escolho e coloco dentro de onclick do botao
    const section = document.getElementById("minha-home");  //variavel "const" esction = ...(id para onde quero ir)
    section.scrollIntoView({ behavior: "smooth" });     // section.scrolIntoView({ comportamento: "smooth"}) para ser devagar
  }
  
function scrollToMe() {
    const section = document.getElementById("sobre-mim");
    section.scrollIntoView({ behavior: "smooth" });
  }
  
function scrollToProjects() {
    const section = document.getElementById("meus-projetos");
    section.scrollIntoView({ behavior: "smooth" });
  }
  
function scrollToContacts() {
    const section = document.getElementById("meus-contatos");
    section.scrollIntoView({ behavior: "smooth" });
  }
  