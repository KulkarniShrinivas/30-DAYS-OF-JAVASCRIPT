//Define a class Account with private fields for balance and method to deposite and withdraw monet. Ensure that the balance can only be updated through these methods

class Account {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.error('Deposit amount must be positive');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.error('Invalid withdraw amount');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());
//private : 