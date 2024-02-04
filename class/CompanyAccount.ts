import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): string => {
        if(this.validateStatus()){
            const newBalance =  this.setBalance(value);
            return `Você realizou o empréstimo de ${value} reais, seu saldo total agora é ${newBalance} reais`;
        }
        const balanceBefore = this.getBalance();
        return `Erro ao realizar empréstimo, saldo em conta: ${balanceBefore} reais, tente novamente mais tarde!`;
    }
}