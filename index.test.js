// miPrueba.test.js
function sumar(a, b) {
    return a + b;
}

test('Suma de 1 + 2 debe ser igual a 3', () => {
    expect(sumar(1, 2)).toBe(3);
});