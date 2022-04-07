//task 1
//Напишите тип функции, конкатенирующей две строки

function concat(method: 'concat', arg1: string, arg2: string): string {
    switch (method) {
        case 'concat': return arg1 + arg2;
    }
}
const greetings = concat('concat', 'Hello ', 'World');

//task 2
//Напишите интерфейс для описания следующих данных

interface IMyHomeTask {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: {
        howIDoIt: string;
        simeArray: (string | number)[];
    }[];
};

const MyHometask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

//task 3
//Добавьте типизацию для метода reduce

const myHometaskArray: IMyArray<number> = [1, 2, 3];

interface IMyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (accumulator: U, currentValue: T, index?: number, array?: T[]) => U, initialValue?: U): U;
};

myHometaskArray.reduce((a, b) => a + b);

//task 4
//Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
};

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
};

type MyPartial<T> = {
    [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]
}
