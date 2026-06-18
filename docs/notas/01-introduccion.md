# Capítulo 1 — Introducción a JavaScript de Élite

## 📝 Resumen del capítulo

- Las aplicaciones web del lado del cliente son de las más populares hoy en día, y los conceptos, herramientas y técnicas que antes se usaban exclusivamente ahí se han extendido a otros ámbitos de desarrollo.
- Mejorar como developer requiere conocimiento profundo de la mecánica básica de JavaScript (no solo de un framework), más entender la infraestructura que dan los navegadores.
- El libro se centra en mecanismos básicos del lenguaje (funciones, closures, prototipos) y en features modernas (generators, promises, proxies, maps, sets, módulos).
- JavaScript corre en muchos entornos, pero el navegador es donde todo empezó y el foco principal del libro.
- Además del lenguaje, el libro explora el DOM (representación estructurada de la UI) y los eventos, porque las apps del lado del cliente son apps basadas en eventos.
- El recorrido se hace con buenas prácticas en mente: debugging, testing y performance.

## ❓ Preguntas clave del capítulo ("Did you know?")

**P1: ¿Qué son Babel y Traceur, y por qué importan?**

Son **transpiladores**: herramientas que toman JS "de vanguardia" (sintaxis nueva) y lo transforman en código equivalente que corre en la mayoría de navegadores actuales. Resuelven el problema de que no todos los navegadores soportan las mismas versiones del lenguaje al mismo tiempo.

> 🔑 Distinción importante: transpilar funciona para **sintaxis** (ej. arrow functions → function tradicional). Para funcionalidades que son **comportamiento del motor** y no solo sintaxis (ej. `Proxy`), no alcanza con transformar código — hace falta un **polyfill**, que implementa la funcionalidad faltante en vez de transformarla.

**P2: ¿Cuáles son las partes fundamentales de la API del navegador?**

- **DOM** (Document Object Model): representación estructurada de la interfaz de la página, la manipulás con cosas como `document.querySelector(...)`.
- **Eventos**: las apps del lado del cliente son apps basadas en eventos (clicks, inputs, etc.).
- **APIs para hablar con un servidor**: `XMLHttpRequest` (forma vieja) y `fetch` (forma moderna, basada en promesas).

> 🔑 Error común que destripamos: **REST no es una API del navegador**. REST es un *estilo de diseño* que un servidor elige seguir (verbos HTTP, recursos por URL, etc.). La API real que el navegador te da para *poder hablar* con cualquier servidor (sea REST, GraphQL o lo que sea) es `fetch` (o antes, `XMLHttpRequest`). Una cosa es la herramienta para comunicarte, otra es la convención que el otro lado decide usar.

## 🧪 Sobre `assert` (sección 1.3.2 — Pruebas)

El libro usa una función `assert(condition, message)` como herramienta principal de testing a lo largo de todo el libro:

```js
assert(a === 1, "Disaster! a is not 1!");
```

- Si `condition` es `true`, no pasa nada visible.
- Si `condition` es `false`, se muestra `message` — la forma más cruda posible de un test, sin framework de por medio.
- `assert` **no es una feature nativa del lenguaje**: el libro la implementa desde cero en el Apéndice B, en vez de usar algo como Jest o Mocha desde el principio.

> 💭 Por qué importa pedagógicamente: escribir tu propio `assert` te obliga a entender *qué* hace un test antes de que una librería te lo abstraiga. Cuando después usás Jest/Mocha, sabés qué hay "debajo" del `expect(...).toBe(...)`.

## 🔗 Conexión con lo que ya sé (Todomachine / React)

La distinción "API de la plataforma vs. convención que alguien sigue" es la misma lógica que separar "qué te da React" de "qué patrón decidís aplicar con eso" (ej: hooks son la API, custom hooks es la convención que armás encima). Buen hábito para seguir viendo en los próximos capítulos.
