//JS types             // TS types

const str = 'string';  // typeof str   -> 'string'
const num = '2 ';      // typeof num   -> 'number'
const nan = 'NaN';     // typeof nan   -> 'number'
const obj = {};        // typeof obj   -> 'object'
const arr = [];        // typeof arr   -> 'object'
const nul = null;      // typeof nul   -> 'object'
const sym = Symbol();  // typeof sym   -> 'symbol'
const und = undefined; // typeof und   -> 'undefined'
const _void = void 0;  // typeof _void   -> 'undefined'
const bool = true;     // typeof bool   -> 'boolean'
const fn = () => { };   // typeof fn   -> 'function'

let tsStr = 'asd';
// tsStr = 1; //не получится присвоить число, тк переменная уже определенна как string

//в JS
//'some' + 2 --> 'some2'
//'some' - 2 --> NaN
//'2' + 2 --> '22'
//'2' - 2 --> NaN
//Памятка: NaN не равен NaN

const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber; //результат - строка
const resultTwo = parseInt(tsString) - tsNumber;//результат - число

//Union type
//в некоторых случаях необходимо, чтобы переменная имела и числовое, и строковое значение
const strOrNumber: string | number = '2';

//Type alias
//Присвоение типа данных сразу нескольким переменным
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = '2';
const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '2';
const strOrNumber4: StrOrNumber = '2';

type AllJSSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

//Array in TS
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

//Union type in TS Arrays
const unionArray: (string | number)[] = [1, 2, '3'];
const unionArray2: Array<string | number> = [1, 2, '3']; //Generic

//Tuple - это массив фиксированной длины
const myTuple: [number, string] = [1, '2'];
const val = myTuple[1];

//Деструктуризация объектов(синтаксис ES6, к-й позволяет следующим образом забирать элементы из обьекта)
const [val1, val2] = myTuple;

//const [state, setState] = useState(); //пример использования хука useState, к-й возвращает tuple

//Object
// пример записи с по-ю type alias в TS синтаксисе
type MyObjType = { a: number, b: string };
const myObj: MyObjType = { a: 1, b: '2' };

//пример записи с пом-ю interface
interface MyFirstInterface {
    readonly a: number; // readonly-запрет на изменение типа данных(значение поменять можно)
    b: string;
    c: number[];
    d?: number;//?-optional Type - указывается чтобы не было ошибки, когда в обьект будут передаваться данные без этого(d) значения
}

const myObj2: MyFirstInterface = {
    a: 2,
    b: '123',
    c: [1]
}

if (myObj2.d) {
    const value = myObj2.d;//если value не обернуть в if, то значение будет - undefined
}

//Индекс сигнатуры - применяется тогда, когда неизвестно точно ключи и значения получаемого обьекта
const ApiAnswer: IndexInterface = { key: 'asd', key1: 'ass' };

interface IndexInterface {
    [N: string]: string;
}

//Functions

enum Methods {
    add,
    sub,
}

function calculate(method: Methods, left: number, right: number): number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

const sum = calculate(Methods.add, 2, 2);
const ArrowFn: FnInterface = (value) => 2;
type TypeFn = () => number;
interface FnInterface {
    (a: number): void;
}

// Особые типы в TS
type StrangeTSTypes = any | unknown | never;

const some: any = '2';//или 2, или [2]
some.reduce(); // для any доступны любые действия и методы

const un: unknown = '2';
if (typeof un === 'string') {
    un.concat();
};

function neverFn(): never {
    throw new Error('my exception');
}

const someValue = neverFn();