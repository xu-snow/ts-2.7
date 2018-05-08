export const SERIALIZE = Symbol("serialize-method-key");

export interface Serializable {
    [SERIALIZE](obj: {}): string;
}
