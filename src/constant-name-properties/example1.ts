
import { SERIALIZE, Serializable } from "./lib";

// 引入Symbol机制,保证每个属性的名字都是独一无二
// 从根本上防止属性名的冲突。

export class JSONSerializableItem implements Serializable {
    //  error TS2420, 只能用引入的SERIALIZE来作属性的名称
    // ["serialize-method-key"](obj: {}) { //
    //     return JSON.stringify(obj);
    // }
    
    [SERIALIZE](obj: {}) { //
        return JSON.stringify(obj);
    }
}