import { CompanyAccount } from "./class/CompanyAccount";
import { SpecialAccount } from "./class/SpecialAccount";

const peopleAccount = new CompanyAccount('Samantha', 123);

console.log(peopleAccount.deposit(50));

console.log(peopleAccount.getBalance());

console.log(peopleAccount.deposit(50));

console.log(peopleAccount.getBalance());

console.log(peopleAccount.withdraw(50));

console.log(peopleAccount.getBalance());

console.log(peopleAccount.withdraw(80));

console.log(peopleAccount.getBalance());

console.log(peopleAccount.getLoan(150));

console.log(peopleAccount.getBalance());

const peopleSpecialAccount = new SpecialAccount('Fulano', 1234);

console.log(peopleSpecialAccount.getBalance());
console.log(peopleSpecialAccount.deposit(50));
console.log(peopleSpecialAccount.getBalance());