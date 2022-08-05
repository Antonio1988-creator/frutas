# Ejemplo de carrito de compra con "template" y "fragment"

## Es un ejercicio para practicar.

### Creación "template" en html
```html
<template id="template">
    <li class="list-group-item d-flex justify-content-between">
        <span class="lead">Fresa</span>
        <span class="badge bg-primary rounded-pill">12</span>
    </li>
</template>

```
### Creación de "fragment" en JavaScript.
```javascript
const fragment = document.createDocumentFragment();
```

### CLonación del "template", manipulación del clone y añadir el clone al fragment:
```javascript
const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragment.appendChild(clone);
```

### Añadir el fragment al document:
```javascript
    carrito.appendChild(fragment);

```
