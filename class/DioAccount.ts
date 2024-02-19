export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (value: number): void => {
    this.balance += value;
    console.log(`Você depositou ${value} em sua conta`);
  };

  withdraw = (value: number): void => {
    if (this.balance > value) {
      this.balance = this.balance - value;
      console.log("Você sacou e seu saldo agora é de R$ " + this.balance);
    } else {
      console.log("Você não tem saldo o suficiente");
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    } else {
      throw new Error();
    }
  };
}
