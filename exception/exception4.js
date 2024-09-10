function checkPositive(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("o argumento deve ser um array");
    }

    const allPositive = numeros.every((num) => num > 0);
    if(!allPositive){
        throw new Error("o array deve conter apenas numeros positivos");
    }
    return true;
}


try{
    const numbers = [ 1, 2, -3, 4, 5, 6];

    const isPositive = checkPositive(numbers);

    console.log(isPositive);
}
catch (e){
    console.log("ocorreu uma exceção: " + e.message);

}