# Capítulo 2 — Ciclo de vida de una aplicación web del lado del cliente

## 📝 Resumen del capítulo

- El HTML que recibe el navegador se usa como plantilla para crear el DOM: una representación interna de la estructura de la app web.
- JavaScript se usa para modificar dinámicamente el DOM y darle comportamiento a la app.
- La ejecución de una app web del lado del cliente ocurre en **dos fases**:

### Fase 1 — Page building (Creación de páginas)
- El navegador parsea el HTML de arriba hacia abajo y construye el DOM progresivamente.
- Cuando encuentra un nodo `<script>`, **para el parseo** y ejecuta el JS inmediatamente.
- Después de ejecutar el script, retoma el parseo del HTML — alterna entre parsear y ejecutar.
- Durante esta fase el JS puede modificar el DOM y registrar event handlers.

### Fase 2 — Event handling (Gestión de eventos)
- Los eventos se procesan **uno a la vez**, en el orden en que se generaron.
- La **cola de eventos** (event queue) almacena todos los eventos en orden de llegada.
- El **event loop** revisa constantemente la cola y despacha el handler correspondiente a cada evento.

## ❓ Preguntas clave del capítulo ("Did you know?")

**P1: ¿El navegador siempre construye la página exactamente según el código HTML proporcionado?**

No necesariamente. El DOM se construye progresivamente mientras el navegador parsea el HTML de arriba hacia abajo. Si un `<script>` intenta acceder a un elemento que está más abajo en el HTML, ese elemento todavía no existe en el DOM y `document.getElementById()` retorna `null`.

> 🔑 Gotcha clásico: el orden de los `<script>` en el HTML importa. Un script solo puede acceder a los elementos que ya fueron parseados antes de él.

**P2: ¿Cuántos eventos puede gestionar una aplicación web simultáneamente?**

Solo **uno a la vez**. El navegador no procesa eventos en paralelo — los encola y los despacha uno por uno.

**P3: ¿Por qué los navegadores deben usar una cola de eventos?**

Porque solo pueden procesar un evento a la vez. Si llegan varios eventos simultáneamente (ej: click + mousemove), necesitan una fila de espera para procesarse en orden sin perderse ninguno. El event loop es el mecanismo que revisa esa cola constantemente.

## 📋 Ejercicios del libro resueltos

**1. ¿Cuáles son las dos fases del ciclo de vida de una app web del lado del cliente?**
Page building y Event handling.

**2. ¿Cuál es la ventaja de `addEventListener` vs asignar un handler a una propiedad del elemento?**
`addEventListener` permite registrar múltiples handlers para el mismo evento en el mismo elemento. Si usás `elemento.onclick = fn`, el siguiente handler sobreescribe al anterior — solo puede haber uno. Con `addEventListener` podés tener todos los que necesitás.

**3. ¿Cuántos eventos se pueden procesar a la vez?**
Uno solo a la vez.

**4. ¿En qué orden se procesan los eventos de la cola de eventos?**
En orden de llegada — primero en entrar, primero en procesarse (FIFO: First In, First Out).

## 🔑 Gotchas importantes

- `document.getElementById("second")` retorna `null` si el elemento está más abajo en el HTML y el script se ejecuta antes de que el navegador lo parsee.
- El event loop no es magia — es un `while` que revisa la cola de eventos constantemente y llama al handler correspondiente.

## 🔗 Conexión con lo que ya sé

- El "one at a time" del event loop es la razón por la que en React no podés tener dos `setState` que se ejecuten verdaderamente en paralelo — React también respeta el modelo de single-thread de JS.
- Los `addEventListener` del Cap. 2 son la base de los event handlers en React (`onClick`, `onChange`, etc.) — React solo los abstrae con una capa encima (synthetic events).
