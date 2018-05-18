const test:boolean = false
const obj = test ? { text: "hello" } : {};  // { text: string } | { text?: undefined }
const s = obj.text;  // string | undefined

// { a: number, b: number } |
// { a: string, b?: undefined } |
// { a?: undefined, b?: undefined }
let obj2 = [{ a: 1, b: 2 }, { a: "abc" }, {}][0];

declare function f<T>(...items: T[]): T;

let obj3 = f({ a: 1, b: 2 }, { a: "abc" }, {});
obj3.a;  // string | number | undefined
obj3.b;  // number | undefined

// in操作符现在做为类型保护使用，会细化掉没有明确声明的属性名

interface A { a: number };
interface B { b: string };

function foo(x: A | B) {
    if ("a" in x) {
        return x.a;
    }
    return x.b;
}

