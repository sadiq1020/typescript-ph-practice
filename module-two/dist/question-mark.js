"use strict";
var _a, _b;
const age = 12;
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
const userName1 = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName1 }, { userName2 });
const humanOne = {
    name: 'Sajid',
    age: 50,
    address: {
        city: 'No city',
        road: 'No Road',
    }
};
const home = (_b = (_a = humanOne === null || humanOne === void 0 ? void 0 : humanOne.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home'; // default value (using "Nullish coalescing operator")
console.log(home);
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
