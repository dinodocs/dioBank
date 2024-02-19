import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount("Murillo", 1, 1);

const companyAccount: CompanyAccount = new CompanyAccount("Murillo", 1);
const newAccount: NewAccount = new NewAccount("Ketlen", 2);

peopleAccount.getBalance();
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
companyAccount.getLoan(200);
newAccount.deposit(100);
