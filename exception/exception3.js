function processName (nome, callback){
    if(typeof nome !== 'string'){
        callback(new Error("o nome deve ser uma String"))
        return;
    }

    if(nome.length === 0){
        callback(new Error("o nome não pode estar vazio"))
        return;
    }

    callback(null, "Nome processado com sucesso");
}

processName("Marcelo" , (error, result) => {
    if(error){
        console.log("ocorreu um problema" , error.message);
    }else{
        console.log(result);
    }
});