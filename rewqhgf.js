// function toNumber(str) {
//   return Number(str.replace(',' , '.'))
// }


// function calcBMI({ weight, height }) {
// weight = toNumber(weight);
// height = toNumber(height);

// let result =  weight / (Math.pow(height, 2));
// return result.toFixed(1)
// console.log(weight)
// }

// const bmi = calcBMI('88,3', '1,75');


// console.log(bmi);
/////////////////////////////////////////////////////////////////////////////////////////////////
//завдання 2
// function min(a, b) {
//   return (a < b) ? a : b 
    
// }
// console.log(min(85, 321));

///////////////////////////////////////////////////////////////////////////////////////////////// 3

// function getSquer(dimension) {
//   let dimensionNew = dimension.split(' '); 
//   let width = toNumber(dimensionNew[0]);
//   let height = toNumber(dimensionNew[1]);
//   return width*height
//   console.log(width);
//   console.log(height);
// };

// console.log(getSquer('122 11,5'))

///////////////////////////////////////////////////////////////////////////////////////////////// 4 

// function findBigger(number) {
// let max = number[0];
// for (let i = 1; i < number.length; i++) {
// if (number[i] > max) {
//   max = number[i];
// }

// }
// return max;
// } 



// console.log(findBigger([4324, 44, 7, 90093231, 4]));

///////////////////////////////////////////////////////////////////////////////////////////////// 5





// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
    
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       console.error('недосатньо коштів');
//       return;
//     } 
//     let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return null;
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(3000);
// account.withdraw(378);
// account.deposit(170);
// account.withdraw(108);
// console.log('balance', account.getBalance());

// account.getTransactionTotal(account.transactions);
// account.getTransactionTotal(account.transactions);

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// console.log(account.getTransactionTotal(Transaction.WITHDRAW))


///////////////////////////////////////////////////////////////////////////////////////////////

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код


// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy'; 
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
// console.log(`${key} - ${user[key]}`)
// }
 
// console.log(user);


///////////////////////////////////////////////////////////////////////////////////////////////

// Example 2 - метод Object.values()
// // У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування 
// всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390.
//  Якщо об'єкт salaries порожній, то результат має бути 0.

// Код




// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;


// for (let i of  Object.values(salaries)) {
// sum += i
// }

// console.log(sum)

///////////////////////////////////////////////////////////////////////////////////////////////


// // Напишіть функцію calcTotalPrice(stones, stoneName),
//  яка приймає масив об'єктів та рядок з назвою каменю. 
//  Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// // Код



// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (let stone of stones) {
// if(stoneName === stone.name) {
//   return stone.price * stone.quantity;
// }
// }
// }

// console.log(calcTotalPrice(stones, 'Сапфір'));

///////////////////////////////////////////////////////////////////////////////////////////////

// Перепиши функцію так, щоб вона приймала об'єкт параметрів із
// //  властивостями companyName та stock та виводила репорт про 
// //  кількість товарів на складі будь-якої компанії.

// // Рішення
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

///////////////////////////////////////////////////////////////////////////////////////////////
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const countLike = tweets => tweets.reduce((like, tweet) => 
//   like + tweet.likes, 0);

//  console.log(countLike(tweets));

//  ///////////////////////////////////////////////////////////////////////////////////////////////
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const countLike = tweets => tweets.reduce((like, tweet) => 
//   like + tweet.likes, 0);

//  console.log(countLike(tweets));

///////////////////////////////////////////////////////////////////////////////////////////////

// / Завдання 2. // Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове
// // значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними
// // методами.

// var vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// // const str = vegetables.join(',');

// let strNew = '';
// vegetables.forEach(vegetable => {
//   strNew += vegetable + ',';
// })

// console.log(strNew.slice(0, -1));

///////////////////////////////////////////////////////////////////////////////////////////////
/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. 
Напишіть код для підсумовування всіх зарплат та 
збережіть результат у змінній sum. Повинно вийти 390. 
Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//       Mango: 100,
//       Poly: 160,
//       Ajax: 1470,
// }

// const salary = Object.values(salaries);
// let sum = 0;
// for (let item of salary) {
  
//   sum += item;
// }

//

// let sum = 0;
// for (let item in salaries) {
//   if (salaries.hasOwnProperty(item)) {
// sum += salaries[item];
//   }
// }
// console.log(sum);
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// function isPlainObject(item){
//   console.log(typeof item)
//   return typeof item === 'object' && item !== null && !Array.isArray(item)
// }
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

