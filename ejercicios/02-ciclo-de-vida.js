// ejercicios/02-ciclo-de-vida.js

// Reutilizamos nuestro assert del Cap. 1
function assert(condition, message) {
  if (condition) {
    console.log(`✅ ${message}`);
  } else {
    console.log(`❌ ${message}`);
  }
}

// ------------------------------------------------------------
// Ejercicio 1: el gotcha del orden de scripts
// ------------------------------------------------------------

const DOM = {
  "first": { id: "first", children: [] },
};

function getElementById(id) {
  if (DOM[id]) {
    return DOM[id];
  } else {
    return null;
  }
}

// Casos de prueba
assert(getElementById("first") !== null, "first existe en el DOM");
assert(getElementById("second") === null, "second no existe todavía — retorna null");

// ------------------------------------------------------------
// Ejercicio 2: addEventListener vs asignación directa
// ------------------------------------------------------------

const boton = {
  onclick: null,
  _handlers: [],

  asignarHandler(fn) {
    this.onclick = fn;
  },

  addEventListener(evento, fn) {
    this._handlers.push(fn);
  },

  click() {
    if (this.onclick) this.onclick();
    this._handlers.forEach(fn => fn());
  }
};

// Asignación directa — el segundo sobreescribe al primero
boton.asignarHandler(() => console.log("Handler 1 directo"));
boton.asignarHandler(() => console.log("Handler 2 directo"));

console.log("--- Asignación directa (solo el último sobrevive) ---");
boton.click();

// Resetear
boton.onclick = null;

// addEventListener — ambos coexisten
boton.addEventListener("click", () => console.log("Listener 1"));
boton.addEventListener("click", () => console.log("Listener 2"));

console.log("--- addEventListener (ambos se ejecutan) ---");
boton.click();

// ------------------------------------------------------------
// Ejercicio 3: mini simulación de la cola de eventos
// ------------------------------------------------------------

const colaDeEventos = [];

function agregarEvento(evento) {
  colaDeEventos.push(evento);
}

function procesarSiguiente() {
  const evento = colaDeEventos.shift();
  evento.handler();
}

// Registrar eventos
agregarEvento({ tipo: "click", handler: () => console.log("Procesando: click") });
agregarEvento({ tipo: "mousemove", handler: () => console.log("Procesando: mousemove") });
agregarEvento({ tipo: "keypress", handler: () => console.log("Procesando: keypress") });

// El event loop procesa uno por uno
console.log("--- Procesando cola de eventos ---");
while (colaDeEventos.length > 0) {
  procesarSiguiente();
}
