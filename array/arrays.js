
var valores = [8, 6, 3, 10, 45];

//pegando valor especifico
console.log(valores[3]);

//percorrendo cada elemento
for(var posicao = 0; posicao < valores.length; posicao++){
    console.log("posição:" + valores[posicao]);
}


var carros = [];
carros[0] = "volvo";
carros[1] = "jeep";

var motos = new Array("BMW" , "yamaha", "honda");

//calculando media de todos os elementos de um array 

var soma;
for(var posicao = 0; posicao < valores.length; posicao++){
    soma = soma + valores[posicao]; 
}
var media = soma / valores.length; 
console.log("a media dos elementos é:" + media);

//revertendo valor do array

console.log(valores.reverse()); 

// método join: separa a lista de acordo com o que for pedido 

console.log(valores.join("-"));

// retirando pirmeiro elemento 

console.log(valores.shift());

//elemento de um indice especifico

console.log(valores.indexOf(3));

// adicionando novo valor:

valores.push(7);
console.log(valores);

var ar = [-5, 10, 15, 20, -3,89];

var listDePositivos = [];
ar.forEach(element =>   {
    if(element > 0)
    listDePositivos.push(element)
});
console.log("numeros positivos: " + listDePositivos.join("-"));


var array2 = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

array2.splice(2, 3);

console.log(array2);
 
//entendendo splice 
var nomes = ["maria", "samuel", "manuel", "cris" , "alvaro"];
 
nomes.splice(2, 1, "emanuel");
console.log(nomes);

//entendendo slice
var pessoa = ["Eduardo", "Joana", "wallace", "rosana"];

var pessoas1 = pessoa.slice(1, 3);

console.log(pessoas1);

// entendendo concat 

var gerente = ["davi", "manu"];
var empresa = pessoa.concat(gerente);

console.log(empresa);
