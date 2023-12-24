const productos = [
    {
        id: "gyarados",
        nombre: "Gyarados EX",
        descripcion: "Carta del Set Scarlet & Violet",
        stock: 36,
        precio: 25,
        imagen: "../img/pokemon1.png",
        categoria:"pokemon",
    },
    {
        id: "avacyn",
        nombre: "Avacyn, Angel of Hope",
        descripcion: "Carta del Set Double Masters Box Toppers",
        stock: 1,
        precio: 88,
        imagen: "../img/magic1.jpg",
        categoria:"magic",
    },{
        id: "darkmagician",
        nombre: "Dark Magician Girl",
        descripcion: "Carta de la Primera Edicion",
        stock: 2,
        precio: 180,
        imagen: "../img/yugioh1.png",
        categoria:"yugioh",
    },{
        id: "ltg",
        nombre: "Dark Magician Girl",
        descripcion: "Carta de la Primera Edicion",
        stock: 2,
        precio: 180,
        imagen: "https://imgb.ifunny.co/images/039fa2a00be3724def2c54169bcb8c02e128e8df0d022c44d78b8e6b75179c42_1.jpg",
        categoria:"yugioh",
    }
    
]

const obtenerProductos = new Promise((resolve, reject) => {

    // retraso de 2 segundos 
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos