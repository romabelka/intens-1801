export default function createCounterStore() {
    return {
        count: 0,
        get doubleCount() {
            return this.count * 2
        },
        incrementCount() {
            this.count++
        }
    }
}
