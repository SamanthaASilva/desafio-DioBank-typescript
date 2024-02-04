export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0 
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso')
    }

    setBalance = (value: number): number => {
        return this.balance += value;
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): string => {
        if(this.validateStatus()){
            const newBalance = this.balance += value;
            return `Você depositou ${value} reais, seu saldo total agora é ${newBalance} reais`;
        }

        return'Erro ao depositar, tente novamente mais tarde!';
    }

    withdraw = (value: number): string => {
        if(this.validateStatus()){
            if(value < this.balance) {
            const newBalance = this.balance - value;
            this.balance -= value;
            return `Você sacou ${value} reais, seu saldo total agora é ${newBalance} reais`;
            }
        }

        return `Erro ao sacar, saldo em conta: ${this.balance} reais, tente novamente mais tarde!`;
    }

    getBalance = (): number => {
        return this.balance;
    }

    protected validateStatus = (): boolean => {
        if (this.status){
            return this.status
        }

       return false;
    }
}