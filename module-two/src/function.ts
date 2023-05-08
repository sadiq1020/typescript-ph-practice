// normal function
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(10, 50)
console.log(add);

// normal function with default value --> Module 2.6
function add2(num1: number = 10, num2: number): number {
    return num1 + num2;
}
add(50, 30);

// arrow function
const addArrow = (num1: number, num2: number): number => (num1 + num2)

// example:
const arr = [5, 7, 14]
const newArr = arr.map((elem: number) => elem * elem)

// example 2:
const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'Sajid',
    balance: 15,
    addBalance(moneyGift: number) {
        // return `My new balance is ${this.balance + moneyGift}` or,
        console.log(`My new balance is ${this.balance + moneyGift}`);
    }
}

person.addBalance(50);

// spread operator --> Module 2.6
const myFriends = ['chandler', 'joey', 'ross']
const newFriends = ['monica', 'phoebe', 'rachel']

myFriends.push(...newFriends);
// console.log(myFriends);
// or, (ami korsi)
const addFriends = [...myFriends, newFriends];
// console.log(addFriends);

// rest operator
// const greetFriends = (
//     frnd1: string,
//     frnd2: string,
//     frnd3: string): void => console.log(`hi ${frnd1} \n hi ${frnd2} \n hi ${frnd3}`);

const greetFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi ${friend}`));

greetFriends('kola', 'lola', 'mola', 'gola', 'hola');

// array and object destructuring
const myFriendss = ['chandler', 'joey', 'ross']
const newFriendss = ['monica', 'phoebe', 'rachel']

const bestFriends = [myFriends];

const myBestFriend = {
    name1: 'Abul',
    age: 24
}

const { name1 } = myBestFriend;