import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): string => {
        if(this.validateStatus()){
            const newBalance =  this.setBalance(value + 10);
            return `Você depositou ${value} reais, seu saldo total agora é ${newBalance} reais`;
        }

        return'Erro ao depositar, tente novamente mais tarde!';
    }
}