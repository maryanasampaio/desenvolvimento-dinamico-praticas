const pessoa = {
    nome: 'João',
    idade: 25,
    profisssao: "desenvolvedor"
}

const pessoaJson = JSON.stringify(pessoa);
console.log(pessoa);
console.log(pessoaJson);


const pessoaObj = JSON.parse(pessoaJson);
console.log(pessoaObj);