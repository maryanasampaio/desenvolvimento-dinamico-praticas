// o dividendo não pode ser zero

function divide(a , b){
    var resultado = a / b;
    var frase = `resultado da divisão entre ${a} / ${b} = `
    if(b == 0){
        throw new Error("divisão por zero não permitida");
    }
    
    return frase + resultado;
}


try{
    const result = divide(2, 2);
    console.log(result);  
}catch (e){
    console.log("ocorreu uma exceção: " + e.message);

}


// a senha nao pode ter menos de 10 carac


function verificarSenha(senha) {
    if(senha.length < 10){
        throw new Error("a senha deve ter no mínimo 10 caracteres");
    }
    console.log("senha válida " + senha);
}


try{
    verificarSenha('senha123');
    verificarSenha('senha123456');
}
catch (e){
    console.log("ocorreu uma exceção: " + e.message);
}