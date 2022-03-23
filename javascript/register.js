const button = document.getElementById("botao");

button.addEventListener ("click", (event) => {

  const email = document.getElementById("e-mail")
  const senha = document.getElementById("pass_word")
  const nome = document.getElementById("na_me")

/* Condição para o nome */

  if (nome.value.length <= 3) {

    nome.classList.add("errorinput")
    event.preventDefault()

} else{

    nome.classList.remove("errorinput")

}

/* Condição para o e-mail */

  if (email.value == "") {

    email.classList.add("errorinput")
    event.preventDefault()
   
    

  } else{
    email.classList.remove("errorinput")
  
    /*Atributo do indexOf */
    
if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {

    email.classList.add("errorinput")
    event.preventDefault()


  
} else {
    email.classList.remove("errorinput")
   
   
}
}

/* Condição para a senha */


  if (senha.value == "") {

    senha.classList.add("errorinput")
    event.preventDefault()
  
       
} else{

    senha.classList.remove("errorinput")
   
    
}



if (senha.value.length <= 5) {

    senha.classList.add("errorinput")
    event.preventDefault()
    
    
    
} else {

    senha.classList.remove("errorinput")
    
}


})