// ejercicios/01-introduccion.js

// 🥷 Ejercicio: implementar tu propia versión de `assert`

/**
 * @param {boolean} condition - lo que afirmamos que es verdad
 * @param {string} message - qué mostrar si la afirmación falla
 */
function assert(condition, message) {
  if (condition) {
    console.log(`✅ ${message}`);
  } else {
    console.log(`❌ ${message}`);
  }
}

// --- Casos de prueba ---

// Caso 1: debería pasar
const a = 1;
assert(a === 1, "Disaster! a is not 1!");

// Caso 2: debería fallar
const b = 2;
assert(b === 1, "Disaster! b is not 1!");

// Caso 3: fetch en Node vs navegador
assert(
  typeof fetch === "function" || typeof fetch === "undefined",
  "fetch debería ser function (navegador) o undefined (Node sin polyfill)"
);
