

/* SCRIPT FORMS */

const input_nome = document.getElementById("input-nome");
const input_email = document.getElementById("input-email")

const label_nome = document.getElementById("label-nome");
const label_email = document.getElementById("label-email");

const botao = document.getElementById("botao")

const cadastrado = document.getElementById("usuario-cadastrado")

const usuarios = []

input_nome.addEventListener("keyup", trocaNome);
input_email.addEventListener("keyup", trocaEmail)
botao.addEventListener("click", cadastrarUsuario)


function cadastrarUsuario() {
    cadastrado.innerHTML = `
    ${input_nome.value},  agradecemos o contato! Por favor, preencha com seus dados!
    `

    input_nome.value = "";
    trocaNome()
    input_email.value = "";
    trocaSobrenome()

}


function trocaNome() {
    if (input_nome.value.length == 0) {
        label_nome.setAttribute("class", "form-label")
        label_nome.innerHTML = "Nome"
    } else if (input_nome.value.length < 6) {
        label_nome.setAttribute("class", "change-color")
        label_nome.innerHTML = `
        <label>Nome Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_nome.innerHTML = `<label>Nome Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_nome.setAttribute("class", "change-color-2")
    }
}

function trocaEmail() {
    if (input_email.value.length == 0) {
        label_email.setAttribute("class", "form-label")
        label_email.innerHTML = "E-mail"
    } else if (input_email.value.length < 5) {
        label_email.setAttribute("class", "change-color")
        label_email.innerHTML = `
        <label>E-mail Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_email.innerHTML = `<label>E-mail Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_email.setAttribute("class", "change-color-2")
    }
}
