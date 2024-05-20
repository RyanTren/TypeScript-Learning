// let array1: string[] = ['Apple', 'Banana', 'Orange'];
// let array2: number[] = [1,2,3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Orange'];

function genericFunction<T>(arg: T): T{
    return arg;
}

const someStringValue = genericFunction<string>('Hello');
const someNumberValue = genericFunction<number>(2);

console.log(someStringValue);
console.log(someNumberValue);

interface GenericInterface<T> {
    value:T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: 'Hello',
    getValue(){
        return this.value;
    },
};

async function someFunc(): Promise<string>{
    return 'Hello';
}

const result = someFunc();


function generateStringArray(length:number, value:string): string[]{
    let resulted : string[] = []
    resulted = Array(length).fill(value);
    return resulted;
}

console.log(generateStringArray(5, 'Hello'));

function createArray<T>(length:number, value:string): Array<T>{
    let resulted : T[] = []
    resulted = Array(length).fill(value);
    return resulted;
}

let arrayStrings = createArray<string>(5, 'Hello');
let arrayNumbers = createArray<number>(15, 100);

console.log(arrayStrings);
console.log(arrayNumbers);

function pair<T, U>(param1: T, param2: U): [T, U]{
    return [param1, param2];
}

let resultz = pair<number, string>(123, 'Hello');

function processValue<T extends string>(value:T): T {
    console.log(value);
    return value;
}

processValue('Hello');
// processValue(12);
// processValue(true);



