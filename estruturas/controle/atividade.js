
var numero = 1;
var bebida = ""; 
var valor = "";

switch(numero){

    case 1:
        bebida = "café";
        valor = "R$5.00"
        console.log("bebida: " + bebida + "\n" + "valor: " + valor);
break;
case 2:
    bebida = "leite";
    valor = "R$4.00"

    console.log("bebida: " + bebida + "\n" + "valor: " + valor);

        break;

case 3:
bebida = "chá";
valor = "R$3.00"

console.log("bebida: " + bebida + "\n" + "valor: " + valor);

    break;

    default:
        console.log("opção inválida! você deve escolher entre:\n 1.café;\n 2.leite;\n 3.chá");

}

 

