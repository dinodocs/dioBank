import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  deposit = (value: number): void => {
    let balance = this.getBalance();
    balance += value + 10;
    console.log(
      "Você depositou R$ " +
        value +
        " em sua conta especial e agora seu saldo é de R$ " +
        balance
    );
  };
}
