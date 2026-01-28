const SENHA_CORRETA = "98117027";

function entrar() {
  const senha = document.getElementById("senha").value;

  if (senha === SENHA_CORRETA) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("sistema").classList.remove("hidden");
  } else {
    document.getElementById("erro").innerText = "Senha incorreta!";
  }
}

function sair() {
  location.reload();
}
