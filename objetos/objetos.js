
// forma 1 
const pessoa = {
    nome : "maryana", 
    sobrenome: "sampaio",

    get nomeCompleto(){
return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa);

// forma 2
const funcionario = new Object;

funcionario.nome = "Adriano";
funcionario.salario = 1000;

console.log(funcionario);


//forma 3
function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome,
    }
}

const p1 = criarPessoa("matheus", "sampaio");

console.log(p1);


//exercicio 
function criarFuncionario(nome, sobrenome, alt, peso){
    return {

        nome, 
    sobrenome,
    altura: alt,
    peso: peso,

    calculoImc(){
        const indice = this.peso/v(this.altura ** 2).toFixed(1);

        if(indice < 10.5){
            console.log("abaixo do peso");
        }
        else if(indice >=18.5 && indice < 24.8){
            console.log("peso normal");

        }
        else if(indice >=25 && indice < 28.8){
            console.log("acima do peso");

        }
        else if(indice >=30 && indice < 34.8){
            console.log("obesidade 1");
        }
        else if(indice >35 && indice < 38.8){
            console.log("obesidade 2");

        }
        else if(indice >=40){
            console.log("obesidade 3");

        }
    }

    }
}
 

    


console.log(imc.calculoImc);