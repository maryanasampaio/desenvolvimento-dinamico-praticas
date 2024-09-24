class MinhaClasse {

     constructor(valor){
        this.valor = valor;
     }


     operacaoAssincrona(){
        return new Promise((resolve, reject) =>{

            const resultado = this.valor * 2;

            if(resultado >= 10){
                resolve(resultado);
            }else{
                reject("o resultado é negativo");
            }
        })
     }


}


const minhaClasse = MinhaClasse(5);
minhaClasse.operacaoAssincrona()
.then((resultado) => {
    console.log("o resultado da operação é: " , resultado);
})
.catch((erro) =>{
  console.log("ocorreu um problema " , erro);
})