const aprobarPrestamo = require('./prestamo'); 

test('No se aprueba préstamo para estudiante', () => {
    expect(aprobarPrestamo("estudiante", false)).toBe(false);
    expect(aprobarPrestamo("estudiante", true)).toBe(false);
});

test('Se aprueba préstamo para empleado, tenga o no deudas', () => {
    expect(aprobarPrestamo("empleado", false)).toBe(true);
    expect(aprobarPrestamo("empleado", true)).toBe(true);
});

test('Se aprueba préstamo para retirado sin deudas', () => {
    expect(aprobarPrestamo("retirado", false)).toBe(true);
});

test('No se aprueba préstamo para retirado con deudas', () => {
    expect(aprobarPrestamo("retirado", true)).toBe(false);
});

test('Lanza error para tipo de persona no válido', () => {
    expect(() => aprobarPrestamo("otro", false)).toThrow("Tipo de persona no válido");
});
