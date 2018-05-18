- `[number, string, string]`类型的值 不可赋值 `[number, string]` 类型的值了。

- 固定长度元祖

```typescript
interface NumStrTuple extends Array<number | string> {
    0: number;
    1: string;
    length: 2; // using the numeric literal type '2'
}
```

`NumStrTuple` 代表类型为固定长度为2,[0]为number类型,[1]为string 类型的数组

如果不希望固定宽度，只需要最小长度，可以这样：

```typescript
interface MinimumNumStrTuple extends Array<number | string> {
    0: number;
    1: string;
}
```