/**
 * Función para calcular el área de un cuadrado
 * @param {Number} lado Lado: Medida del lado del cuadrado
 * @returns Number, Area del Cuadrado
 */

export function areaCuadrado(lado)
{
    return lado*lado;
}

/**
 * Función para calcular el área de un triángulo
 * @param {Number} base Medida de la base del triágulo
 * @param {Number} altura Medida de la altura del triángulo
 * @returns Number, Area del Triángulo
 */
export function areaTriangulo(base,altura)
{
    return (base*altura)/2;
}

/**
 * Función para calcular el área de un círculo
 * @param {Number} radio Medida del radio del círculo
 * @returns Number, Area del Círculo
 */
export function areaCirculo(radio)
{
    return Math.pow((Math.PI*radio),2);
}

/* module.exports.areaCuadrado=areaCuadrado;
module.exports.areaTriangulo=areaTriangulo;
module.exports.areaCirculo=areaCirculo; */

// Modulo: Archivo que exporta funcionalidades
// Estamos generando un módulo con funciones que reciben parámetros y nos regresan algo