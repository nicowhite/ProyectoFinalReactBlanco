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
        id: "ajani",
        nombre: "Ajani Tenaz",
        descripcion: "Carta del Set Commanders Masters",
        stock: 1,
        precio: 88,
        imagen: "../img/magic1.jpg",
        categoria:"magic",
    },{
        id: "darkmagician",
        nombre: "Dark Magician Girl",
        descripcion: "Carta de la Primera Edicion",
        stock: 111,
        precio: 67,
        imagen: "../img/yugioh1.png",
        categoria:"yugioh",
    },{
        id: "liliana",
        nombre: "Liliana Vess",
        descripcion: "Carta del Set Lorwyn",
        stock: 5,
        precio: 11,
        imagen: "../img/magic2.jpg",
        categoria:"magic",
    },{
        id: "slifer",
        nombre: "Slifer The Sky Dragon",
        descripcion: "Carta de la Primera Edicion",
        stock: 1,
        precio: 8999,
        imagen: "../img/yugioh2.png",
        categoria:"yugioh",
    },{
        id: "oinkologne",
        nombre: "Oinkologne EX",
        descripcion: "Carta del Set Scarlet & Violet",
        stock: 1,
        precio: 30,
        imagen: "../img/pokemon2.png",
        categoria:"pokemon",
    },{
        id: "blueyesdragon",
        nombre: "Blue-Eyes White Dragon",
        descripcion: "Carta de la Primera Edicion",
        stock: 6,
        precio: 25,
        imagen: "../img/yugioh3.png",
        categoria:"yugioh",
    },{
        id: "karn",
        nombre: "Karn Liberado",
        descripcion: "Carta del set New Phyrexia",
        stock: 1,
        precio: 50,
        imagen: "../img/magic3.jpg",
        categoria:"magic",
    },{
        id: "arcanine",
        nombre: "Arcanine EX",
        descripcion: "Carta del Set Scarlet & Violet",
        stock: 2,
        precio: 340,
        imagen: "../img/pokemon3.png",
        categoria:"pokemon",
    }
]

const obtenerProductos = new Promise((resolve, reject) => {

    // retraso de 2 segundos 
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos