// normal type alias
type User = {
    name: string,
    age: number
};

// extend kora jai evabe
type ExtendedUser = User & {
    role: string
};

// extended object
const userWithExtendedUser: ExtendedUser = {
    name: 'hakya',
    age: 20,
    role: 'hudai'
};

// "Interface"
interface IUser {
    name: string,
    age: number
};

/* 
const userWithTypeAlias: User = {
    name: 'Sajid',
    age: 33
}

const userWithInterface: IUser = {
    name: 'Interface',
    age: 20
}

*/
// ami chaile "Interface" ke extend korte pari nicher moto kore
interface EXtendedUser extends IUser {
    role: string
};

// extended object
const userWithExtendedInterface: EXtendedUser = {
    name: 'Pongta',
    age: 50,
    role: 'ajaira'
};

// But ----
type rollNumber = number; // [ekhane jemon tyoe alias diye ekta variable er type bole dewa jai but "interface" use kore only object [object, function, array] type er type bole deowa jai, jemon ta upore dekhano ache]

// Interface valied for Object ==> 1.Object[already shown] 2.Function 3.Array 

// 2. Function (example with "type alias")
type addNUmbersType = (num1: number, num2: number) => number; // Using "type Alias" to define type of arrow function
const addNumbers: addNUmbersType = (num1, num2) => num1 + num2;


// 2. Function (example with "interface")
interface IAddnumbers {
    (num1: number, num2: number): number;
}

const addNumbers2: IAddnumbers = (num1, num2) => num1 + num2;

// ---> [Note: But Function er jonno "Type Alias" use kora better and recommended]

// 3. Array (example with "type alias")
type mobileNumbersType = number[];
const mobileNumbers: mobileNumbersType = [5, 23, 4]

// 3. Array (example with "Interface")
interface IMobileNumbersType {
    [index: number]: number  // as an index of an Array hold the type of Data
};
const mobileNumbers2: IMobileNumbersType = [5, 23, 4]; // [index]

// ---> [Note: But Array er jonno "Type Alias" use kora better and recommended]
// So any pure object er jonno "Interface" use korbo baki sob khetre "Type Alias" use korbo