//Adquir los siguientes elementos en JS: carrito, el temmplate (producto) y botones.
const carrito = document.querySelector("#carrito");
const temmplate = document.querySelector("#temmplate"); 
const botones = document.querySelectorAll(".card .btn");
//Creación de un "fragment" para evitar reflow
const fragment = document.createDocumentFragment();

//Creación de carrito y función de añadir producto al carrito.
const carritoObjeto = {};

const agregarAlCarrito = (e) => {   
    //Creación del objeto "producto"
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    //Añadir la cantidad del producto
    if (carritoObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1;
    }
    //Añadir el objeto "producto" a la lista del objeto "carrito".
    carritoObjeto[producto.titulo] = producto;
    console.log(carritoObjeto);
    //Nostrar el producto en el carrito.
    pintarCarrito();


};

//Función de mostrar en el carrito los productos seleccionados
const pintarCarrito = () => {
    carrito.textContent = "";
    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragment.appendChild(clone);

    });
    //Añadir al carrito el producto creado en "fragment"
    carrito.appendChild(fragment);

};

//Llamada al evento de añadir producto a la lista a través del botón.
botones.forEach((boton)=>boton.addEventListener("click", agregarAlCarrito));