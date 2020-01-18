import {OrderedMap} from "immutable";

export function arrToMap(arr, DataRecord) {
    return new OrderedMap(arr.reduce((acc, el) => {
        acc[el.id] = new DataRecord(el)
        return acc
    }, {}))
}
