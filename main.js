/////////////////////////////// PRIMEROS PASOS ECOMERCE ///////////////////// 

const productos= [
    {
        "id":01,
        "producto":"Buzo 01",
        "precio":5000,
        "descripcion":"buzo basico color negro",
        "categoria":"buzos",
        "oferta":true,
    },
    {
        "id":02,
        "producto":"Buzo 02",
        "precio":6000,
        "descripcion":"buzo basico color gris",
        "categoria":"buzos",
        "oferta":false,
    },
    {
        "id":03,
        "producto":"Buzo 03",
        "precio":7000,
        "descripcion":"buzo basico color blanco",
        "categoria":"buzos",
        "oferta":false,
    },
    {
        "id":04,
        "producto":"Buzo 04",
        "precio":9000,
        "descripcion":"buzo negro estampado",
        "categoria":"buzos",
        "oferta":false,
    },
    {
        "id":05,
        "producto":"Remera 01",
        "precio":3000,
        "descripcion":"remera negra estampada",
        "categoria":"remeras",
        "oferta":false,
    },
    {
        "id":06,
        "producto":"Remera 02",
        "precio":4000,
        "descripcion":"remera lisa blanca",
        "categoria":"remeras",
        "oferta":true,
    },
    {
        "id":07,
        "producto":"Remera 03",
        "precio":5000,
        "descripcion":"remera lisa negra",
        "categoria":"remeras",
        "oferta":false
    },
    {
        "id":08,
        "producto":"Remera 04",
        "precio":5000,
        "descripcion":"remera gris estampada",
        "categoria":"remeras",
        "oferta":true
    },
    {
        "id":09,
        "producto":"Pantalon 01",
        "precio":6000,
        "descripcion":"pantalon de jean claro",
        "categoria":"pantalones",
        "oferta":false
    },
    {
        "id":10,
        "producto":"Pantalon 02",
        "precio":6500,
        "descripcion":"pantalon de jean oscuro",
        "categoria":"pantalones",
        "oferta":true
    },
    {
        "id":11,
        "producto":"Pantalon 03",
        "precio":7000,
        "descripcion":"pantalon de jean negro",
        "categoria":"pantalones",
        "oferta":false
    },
    {
        "id":12,
        "producto":"Pantalon 04",
        "precio":7500,
        "descripcion":"pantalon de vestir",
        "categoria":"pantalones",
        "oferta":false
    },
    {
        "id":13,
        "producto":"Zapatillas 01",
        "precio":10000,
        "descripcion":"zapatillas nike blancas",
        "categoria":"zapatillas",
        "oferta":false
    },
    {
        "id":14,
        "producto":"Zapatillas 02",
        "precio":12000,
        "descripcion":"zapatillas nike negras",
        "categoria":"zapatillas",
        "oferta":true
    },
    {
        "id":15,
        "producto":"Zapatillas 03",
        "precio":14000,
        "descripcion":"zapatillas adidas blancas",
        "categoria":"zapatillas",
        "oferta":true
    },
    {
        "id":16,
        "producto":"Zapatillas 04",
        "precio":15000,
        "descripcion":"zapatillas adidas grises",
        "categoria":"zapatillas",
        "oferta":false
    },
];


/////   VERIFICAMOS SI HAY PRODUCTOS CON OFERTA Y CREAMOS UN NUEVO ARRAY DE PRODUCTOS EN OFERTA CON UN DESCUENTO APLICADO DE UN 10% //////
let productosOferta=[];
function tieneOferta (array){
    array.map((producto)=>{
        if (producto.oferta == true){
            producto.precio = producto.precio - ((producto.precio)*10)/100
            productosOferta.push(producto)
        }
    })
    return productosOferta;
}

tieneOferta(productos)


////// ORDENAMOS EL ARRAY DE PRODUCTOS POR SU PRECIO /////

function ordenaPrecio(array){
    let productosOrdenados = [...productos];
    productosOrdenados.sort((producto1,producto2)=>{
        if (producto1.precio < producto2.precio){
            return -1;
        } else if (producto1.precio > producto2.precio){
            return 1;
        } else{
            return 0;
        }
    })

    return productosOrdenados;
}

ordenaPrecio(productos)
//console.log(ordenaPrecio(productos))



////// LE PREGUNTAMOS AL USUARIO SI DESEA VER LAS OFERTAS Y LAS MOSTRAMOS EN CONSOLA //////


const verOfertas=(array)=>{
    let pregunta = confirm("¿Desea ver nuestras ofertas?");
    if (pregunta==true){
        console.log(productosOferta);
    }
}

verOfertas(productos);



////// LE PREGUNTAMOS AL USUARIO QUE PRODUCTO ESTA BUSCANDO  Y DEVOLVEMOS SU BUSQUEDA POR CONSOLA ////// (posibilidades: Buzo 01, Buzo 02, Buzo 03, Buzo 04, Remera 01, Remera 02, Remera 03, Remera 04, Pantalon 01, Pantalon 02, Pantalon 03, Pantalon 04, Zapatillas 01, Zapatillas 02, Zapatillas 03, Zapatillas 04)

const buscadorProductos=(array)=>{
    let usuarioBusca = prompt("¿Que producto desea ver?");
    const respuesta= array.find((producto)=>{
        return producto.producto === usuarioBusca
    })
    return console.log(respuesta);
}


buscadorProductos(productos);

