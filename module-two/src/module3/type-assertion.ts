// example
let emni: any;

emni = 'next level web development';
(emni as string).length   //etc.ekhane sokol method show korbe, ekhane as diye method mention kore deowa

// another example 
function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted result is ${value} gram`;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
// const resultToBeString = kgToGram('1000') as string; // ei assertion nicher moto kore likha jai 
const resultToBeString = <string>kgToGram('1000');

// another example
type CustomErrorType = {
    message: string
}


try {

} catch (error) {
    console.log((error as CustomErrorType).message);
}