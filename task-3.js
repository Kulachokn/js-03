'use strict'
// ========================================task1=====================================

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// user.mood = 'happy';
// user.mood = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// ========================================task2=====================================

// const countProps = function(obj) {
//     // const quantity = Object.keys(obj).length;
//     // return quantity;
//
//     // let quantity = 0;
//     // const arr = Object.keys(obj);
//     // for (let i = 0; i <= arr.length-1; i++) {
//     //     quantity++;
//     // }
//     // return quantity;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// ========================================task3=====================================

// const findBestEmployee = function(employees) {
//     // const valueArr = Object.keys(employees);
//     // let bestEmployee = valueArr[0];
//     // let biggestValue = employees[valueArr[0]];
//     // for (let i = 1; i < valueArr.length; i += 1) {
//     //     if (biggestValue < employees[valueArr[i]]) {
//     //         biggestValue = employees[valueArr[i]];
//     //         bestEmployee = valueArr[i];
//     //     }
//     // }
//     // return bestEmployee;
//
//     // const entries = Object.entries(employees);
//     // console.log(entries);
//     // let bestEmployee = entries[0][0];
//     // let biggestValue = entries[0][1];
//     // for (let i = 1; i < entries.length; i += 1) {
//     //     if (biggestValue < entries[i][1]) {
//     //         biggestValue = entries[i][1];
//     //         bestEmployee = entries[i][0];
//     //     }
//     // }
//     // return bestEmployee;
//
//     const entries = Object.entries(employees);
//     let bestEmployee = entries[0][0];
//     let biggestValue = entries[0][1];
//     for (const entry of entries) {
//         if (biggestValue < entry[1]) {
//             biggestValue = entry[1];
//             bestEmployee = entry[0];
//         }
//     }
//     return `${bestEmployee} : ${biggestValue}`;
// };

// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// ========================================task4=====================================

// const countTotalSalary = function(employees) {
//     // let total = 0;
//     // const arrSalaries = Object.values(employees);
//     // for (const salary of arrSalaries) {
//     //     total += salary;
//     // }
//     // return total;
//
//     // return Object.values(employees).reduce(function(acc, cur){return acc + cur}, 0);
//     return Object.values(employees).reduce((acc, cur) => acc + cur, 0);
// };


// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// ========================================task5=====================================

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//     const result = [];
//     for (const product of arr) {
//         if(product.hasOwnProperty(prop)) {
//             result.push(product[prop]);
//         }
//     }
//     return result;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// ========================================task6=====================================

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProducts, productName) {
//     let result;
//     for (const product of allProducts) {
//         if (productName === product.name) {
//             result = product.price * product.quantity;
//         }
//     }
//     return result;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ========================================task7=====================================

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    id: 0,

    createTransaction(amount, type) {
        this.id += 1;
        return {amount: amount, type: type, id: this.id};
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.balance += amount;
        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount > this.getBalance()) {
            console.log('Cнятие такой суммы не возможно, недостаточно средств.')
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.balance -= amount;
        this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },


    getTransactionTotal(type) {
        let totalValue = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                totalValue += transaction.amount;
            }
        }
        return totalValue;
    },
};

account.deposit(500);
account.deposit(300);
// account.withdraw(200);
console.log(account.getBalance());
// console.log(account.getTransactionDetails(1));
account.deposit(400);
account.withdraw(500);
account.deposit(600);
console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(5));
