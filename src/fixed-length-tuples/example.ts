
// 固定长度元祖
interface NumStrTuple extends Array<number | string> {
    0: number;
    1: string;
    length: 2; // using the numeric literal type '2'
}

interface MinimumNumStrTuple extends Array<number | string> {
    0: number;
    1: string;
}

let t:NumStrTuple= [1,'string'];

let k:MinimumNumStrTuple = [2,'string',3]
