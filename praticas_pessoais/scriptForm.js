class Funcionario {
    constructor(nome, idade, cargo) {
      if (!nome || !idade || !cargo) {
        throw new Error('Nome, idade e cargo são obrigatórios.');
      }
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, eu sou o ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`;
    }
  
    trabalhar() {
      return `Trabalhando na área de: ${this.cargo}`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      if (!departamento) {
        throw new Error('Departamento é obrigatório para o gerente.');
      }
      this.departamento = departamento;
    }
  
    gerenciar() {
      return 'Gerenciando...';
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      if (!linguagem) {
        throw new Error('Linguagem é obrigatória para o desenvolvedor.');
      }
      this.linguagem = linguagem;
    }
  
    programar() {
      return `Programando em ${this.linguagem}...`;
    }
  }
  
  document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value, 10);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;
  
    try {
      const gerente = new Gerente(nome, idade, cargo, departamento);
      const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
  
      document.getElementById('resultado').innerHTML = `
        <h2>Gerente</h2>
        <p>${gerente.seApresentar()}</p>
        <p>${gerente.trabalhar()}</p>
        <p>${gerente.gerenciar()}</p>
  
        <h2>Desenvolvedor</h2>
        <p>${desenvolvedor.seApresentar()}</p>
        <p>${desenvolvedor.trabalhar()}</p>
        <p>${desenvolvedor.programar()}</p>
      `;
  
      document.getElementById('erro').textContent = '';
    } catch (error) {
      exibirErro(error.message);
    }
  });
  
  function exibirErro(mensagem) {
    document.getElementById('erro').textContent = mensagem;
  }
  