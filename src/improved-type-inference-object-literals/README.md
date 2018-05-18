
## 更智能的对象字面量推断

```typescript
// 现在能正常判断obj的类型了，而不是之前的 {}
const obj = test ? { text: "hello" } : {};  // { text: string } | { text?: undefined }
const s = obj.text;  // string | undefined

// { a: number, b: number } |
// { a: string, b?: undefined } |
// { a?: undefined, b?: undefined }
let obj2 = [{ a: 1, b: 2 }, { a: "abc" }, {}][0];

declare function f<T>(...items: T[]): T; 

// { a: number, b: number } |
// { a: string, b?: undefined } |
// { a?: undefined, b?: undefined }
let obj3 = f({ a: 1, b: 2 }, { a: "abc" }, {});

```