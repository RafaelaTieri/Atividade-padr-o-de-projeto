class Approver {
    constructor(name, approvalLimit) {
      this.name = name;
      this.approvalLimit = approvalLimit;
      this.nextApprover = null; // Referência para o próximo aprovador na cadeia
    }
  
    approveExpense(expense) {
      if (expense.amount <= this.approvalLimit) {
        console.log(`${this.name} aprovou uma despesa de ${expense.amount}.`);
      } else if (this.nextApprover) {
        console.log(`${this.name} não pode aprovar a despesa. Passando para ${this.nextApprover.name}.`);
        this.nextApprover.approveExpense(expense); // Passa a solicitação para o próximo aprovador
      } else {
        console.log(`Nenhum aprovador pode lidar com essa despesa de ${expense.amount}.`);
      }
    }
  
    setNextApprover(nextApprover) {
      this.nextApprover = nextApprover;
    }
  }
  
  class Manager extends Approver {
    constructor() {
      super("Gerente", 1000);
    }
  }
  
  class Director extends Approver {
    constructor() {
      super("Diretor", 5000);
    }
  }
  
  class CEO extends Approver {
    constructor() {
      super("CEO", Infinity);
    }
  }
  
  class Expense {
    constructor(amount) {
      this.amount = amount;
    }
  }
  
  const manager = new Manager();
  const director = new Director();
  const ceo = new CEO();
  
  manager.setNextApprover(director);
  director.setNextApprover(ceo);
  
  const expenses = [new Expense(500), new Expense(2500), new Expense(10000)];
  
  expenses.forEach(expense => {
    manager.approveExpense(expense);
  });
  