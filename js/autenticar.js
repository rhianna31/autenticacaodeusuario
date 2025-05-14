function autenticar(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("senha").value;

    const usuario = "rafael"
    const senha = "123"

    if(!login || !password){
         if(!login)
            document.getElementById("errologin").
        innerText="Preenchimento Obrigatório";
        
        if(!password)
            document.getElementById("erropassword").
        innerText="Preenchimento Obrigatório";
    
        return
    }

    if(usuario==login && password == senha)
        alert("Usuário atenticado com sucesso!!!");
    else
        alert("Usuário não atenticado!!!");
}