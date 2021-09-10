import {cliente} from "./Cliente.js";
export class contaCorrente{
    static numeroDeContas = 0;
    agencia;

    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    _saldo = 0;
    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }
}