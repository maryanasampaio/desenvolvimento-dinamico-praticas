const list = [1, 2, 3, 4 , 5];

try{

    const doubleNumbers = numeros.map((num) => {
        if(typeof num != 'number'){
            throw new Error('o array só pode ter números');
        }
        return num * 2;
    })
    console.log(doubleNumbers);
}
catch (e) {
    console.log("ocorreu uma exceção: " + e.message);

}