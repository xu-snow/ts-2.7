// Works
const Foo: unique symbol = Symbol();


// Error! 'Bar' isn't a constant.
// let Bar: unique symbol = Symbol();

// Works - refers to a unique symbol, but its identity is tied to 'Foo'.
// let Baz = Foo // 这样的话 Baz 的类型为symbol
let Baz: typeof Foo = Foo // 类型为unique symbol

// Also works.
export class C {
    static readonly StaticSymbol: unique symbol = Symbol();
}

const Bar = Symbol();

export default  Bar
// Error: can't compare two unique symbols.
// if (Foo === Bar) {
//     // ...
// }
