// old constructor example
// function OldConstructor(fieldValue) {
//     this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function () {
//     return this.field;
// }

// const instance = new OldConstructor();
// instance.method(); // --> 123

//new constructor example

// Абстрактные классы
abstract class AbstractClass {
    public abstract abstractField: number;

    public abstract abstactMethod(): number;

    protected protectedMethod() {
        return this.abstractField;
    }
}

class NewChild extends AbstractClass {
    public abstractField: number = 123;
    public abstactMethod(): number {
        throw new Error("Method not implemented.");
    }
}

// implements

interface MyInterface {
    field: string;
    method(): string;
}

class NewClass implements MyInterface {
    field: string = '123';
    method(): string {
        return ' ';
    }
}

// class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
//     constructor(props: { prop1: number }) {
//         super(props);
//         this.state = {
//             state1: '123'
//         }
//     }

//     public render() {
//         return (
//             <div>{this.props.prop1}</div>
//         )
//     }
// }