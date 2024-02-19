import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = (value: number): void => {
    let balance = this.getBalance();
    if (this.validateStatus()) {
      balance += value;
      console.log(
        `Você fez um empréstimo de ${value} e agora seu saldo é de R$ ${balance}`
      );
    }
  };
}
