class bankaccount{
    #balance=0;

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getbalance(){
        return `$ ${this.#balance}`
    }
}
let account = new bankaccount();
//console.log(account.#balance); this will give the error because we cannot diretly access the account

//abstraction

class coffe{
      start(){
        return `starting the machine ..`
      }
      blackcoffe(){
        return   `blackcoffe`
      }
      pressstart(){
        let arr= this.start();
        let brr=this.blackcoffe();
        return `${arr}` + `${brr}`
      }
}
let co=new coffe();
// console.log(co.start());
// console.log(co.blackcoffe())
console.log(co.pressstart());
