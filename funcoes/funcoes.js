// funcao regular 


function multiplicar (x, y){
    return x * y;
}

var a = multiplicar(4,2);
console.log(a);

//funcao anonima 

var infoCal = function(a, b ,c){ return a + b + c;}

var result = infoCal(5, 7, 10);
console.log(result);


// arrow function 

var divisao = (a , b) => {
    return a / b;
}

var resultDiv = divisao(10,2);
console.log(resultDiv);


//exemplo adicionando e removendo itens na lista atraves de funcao 

var listDeCompras = [];

function adicionarItenNaLista(item){
    listDeCompras.push(item);
}

    function removerItensNaLista(item){

 var index = listDeCompras.indexOf(item);

    listDeCompras.includes(item) ? listDeCompras.splice(index, 1) : listDeCompras;
    
}

 adicionarItenNaLista("legumes");
 adicionarItenNaLista("frutas");

removerItensNaLista("legumes");
removerItensNaLista("legumes");

console.log(listDeCompras);

 