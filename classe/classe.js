class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, eu sou o ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`Trabalhando na área de: ${this.cargo}`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log("Gerenciando...");
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Programando em ${this.linguagem}...`);
  }
}

const funcionario1 = new Funcionario("José", 23, "consultor de vendas");
funcionario1.seApresentar();

const gerente1 = new Gerente("Pedro", 30, "Gerente", "Recursos Humanos");
gerente1.seApresentar();

const desenvolvedor1 = new Desenvolvedor("André", 35, "desenvolvedor de aplicativos", "Java");
desenvolvedor1.seApresentar();
