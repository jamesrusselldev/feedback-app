export function getAverage(values) {
    return Math.ceil(values.reduce((a, b) => a + b, 0) / values.length);   
}