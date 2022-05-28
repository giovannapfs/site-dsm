function primeiraFuncao(){
    alert ("Primeira atividade de JavaScript")
}

function validar(){
    //declaração de variavel//
    let nome = cadastro.nome.valuegit
    let cpf = cadaastro.cpf.value
    let email = cadastro.email.value
    let senha = cadastro.senha.value
    let confirma = cadastro.confirma.value

    if(nome==""){
        alert("Campo nome é obrigatório")
        cadastro.nome.focus()
        return false
    }
    if(cpf==""){
        alert("Campo CPF é obrigatório")
        cadastro.cpf.focus()
        return false
    }
    if(email==""){
        alert("Campo E-Mail é obrigatório")
        cadastro.email.focus()
        return false
    }
    if(senha==""){
        alert("Campo senha é obrigatório")
        cadastro.senha.focus()
        return false
    }
    if(confirma==""){
        alert("É obrigatório digitar novamente a senha")
        cadastro.confirma.focus()
        return false
    }
    if(isNaN(cpf)){
        alert ("Digite somente números para o campo CPF")
        cadastro.cpf.focus()
        return false
    }
    if(senha != confirma){
        alert ("As senhas não conferem")
        cadastro.confirma.focus()
        return false
    }
    if(cpf.length != 11){
        alert ("CPF inválido")
        cadastro.cpf.focus()
        return false
    }
}