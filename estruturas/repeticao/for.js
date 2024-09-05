//testando iteraçao no for 
const carros = [

    { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, dataCriacao: "01/01/2022" },
  
    { id: 2, modelo: "Punta", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2022" },
  
    { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 40000, dataCriacao: "01/03/2022" }
  
  ];
  
  let totalPrecos = 0;
  
  for (let i = 0; i < carros.length; i) {
  
    const carro = carros[i];

    totalPrecos += carro.preco;

}

console.log("Total dos preços dos carros:", totalPrecos);



//testando tipos de for
var carro = [
    {
        modelo: "compass", marca: "jeep", ano: 2020
    },

    {
        modelo: "Audio 03", marca: 'Audi' , ano: 2020
    }
];

for(var i = 0; i < carro.length; i++){
    console.log(carro[i].modelo);
}

for(propriedade in carro){
    console.log(carro[propriedade].modelo);
}
 
for(let c of carro){
    console.log(c.modelo);
}