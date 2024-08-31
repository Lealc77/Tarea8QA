function aprobarPrestamo(tipoPersona, tieneDeudas) {
    if (tipoPersona === "estudiante") {
        return false;
    } else if (tipoPersona === "empleado") {
        return true;
    } else if (tipoPersona === "retirado") {
        return !tieneDeudas;
    } else {
        throw new Error("Tipo de persona no válido");
    }
}

module.exports = aprobarPrestamo; 