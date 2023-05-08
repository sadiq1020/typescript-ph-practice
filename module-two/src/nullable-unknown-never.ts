// nullable

const searchName = (value: string | null) => {
    if (value === null) {
        console.log('nothing to search');
    }
    else {
        console.log('searching');
    }
}

searchName(null);

// unknown
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my car speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ')
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`my car speed is ${convertedSpeed}`);
    }
    else {
        console.log('this is wrong type');
    }
}

getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1');  // kmh^-1 --> ms^-1
getMyCarSpeed(true);

// never
function throwError(message: string) {
    throw new Error(message);
}

throwError('kochu coding korso');
