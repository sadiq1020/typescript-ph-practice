const age: number = 12;

/* 
if (age >= 18) {
    console.log('yes')
} else {
    console.log('no');
}

--> ei simple kaj ta turnary operator er maddhomeo kora jai
*/

const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);

// Nullish coalescing operator
// Null and Undefined
const isAuthenticatedUser = "";
const userName1 = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest'
console.log({ userName1 }, { userName2 });

//
type Human = {
    name: string,
    age: number,
    address: {
        city: 'No city',
        road: 'No Road',
        home?: ""
    }
}

const humanOne: Human = {
    name: 'Sajid',
    age: 50,
    address: {
        city: 'No city',
        road: 'No Road',
    }
}

const home = humanOne?.address?.home ?? 'No Home' // default value (using "Nullish coalescing operator")
console.log(home);

function generateAdder(a: number): (b: number) => number {
    return function (b: number) {
        return a + b
    };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));

