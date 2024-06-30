const propiedadVenta = [
    {
    nombre:'Apartamento de lujo en zona exclusiva',
    src: './assets/img/venta1.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 2,
    costo: 40000000,
    smoke: false,
    pets: false
},
{
    nombre:'Casa Rodante Con terreno',
    src: './assets/img/venta2.jpg',
    descripcion: 'Hermosa Casa rodante con terreno en torres del Paine con vista al valle',
    ubicacion: 'Torres del Paine',
    habitaciones: 2,
    banos: 1,
    costo: 20000000,
    smoke: true,
    pets: true
},
{
    nombre:'Bella Casa Pre-fabricada en Chillan ',
    src: './assets/img/venta3.jpg',
    descripcion: 'Hermosa casa ubicada en chillan con 2 accesos a 10 minutos de la ciudad',
    ubicacion: 'Chillan, zona rural',
    habitaciones: 4,
    banos: 3,
    costo: 35000000,
    smoke: true,
    pets: true
},
{
    nombre:'Gran Propiedad en Valdivia',
    src: './assets/img/venta4.jpg',
    descripcion: 'Hermosa casa ubicada en valdivia en pleno ingreso a la region con amplios espacios abiertos',
    ubicacion: 'Valdivia, Km35',
    habitaciones: 5,
    banos: 3,
    costo: 55000000,
    smoke: false,
    pets: false
},
{
    nombre:'Casa disponible en Huechuraba',
    src: './assets/img/venta5.jpg',
    descripcion: 'gran propiedad en la comuna de huechuraba en Santiago, cuenta con piscina privada',
    ubicacion: 'Huechuraba, Santiago',
    habitaciones: 6,
    banos: 3,
    costo: 650000000,
    smoke: false,
    pets: true
},
{
    nombre:'Bella casa en Condominio',
    src: './assets/img/venta6.jpg',
    descripcion: 'Hermosa casa en condominio Don Aurelio en Calle Larga, con acceso a la avenida principal',
    ubicacion: 'Calle Larga, Los Andes, Region Valparaiso',
    habitaciones: 4,
    banos: 2,
    costo: 39000000,
    smoke: false,
    pets: false
}
]
const propiedadArriendo = [
    {
        nombre:'Lujosa Casa con Piscina',
        src: './assets/img/arriendo1.jpg',
        descripcion: 'Se arrienda lujosa casa con piscina con todas las comodidades y tecnologias',
        ubicacion: 'Las Condes, Santiago',
        habitaciones: 6,
        banos: 3,
        costo: 1500000,
        smoke: true,
        pets: true
    },
    {
        nombre:'Hermosa Casa de Veraneo',
        src: './assets/img/arriendo2.jpg',
        descripcion: 'Se arrienda hermosa casa de verano a 5 minutos de la playa caminando',
        ubicacion: 'Algarrobo',
        habitaciones: 4,
        banos: 2,
        costo: 400000,
        smoke: true,
        pets: false
    },
    {
        nombre:'SmartHome',
        src: './assets/img/arriendo3.jpg',
        descripcion: 'Se arrienda hermosa casa con funciones completamente automatizadas y con piscina temperada',
        ubicacion: 'Puerto Montt',
        habitaciones: 4,
        banos: 3,
        costo: 650000,
        smoke: true,
        pets: true
    },
    {
        nombre:'Hermosa Casa ubicada en medio de la Naturaleza',
        src: './assets/img/arriendo4.jpg',
        descripcion: 'Se arrienda bella casa ubicada en medio de la naturaleza aunque solo a 15 minutos de la ciudad',
        ubicacion: 'Frutillar',
        habitaciones: 5,
        banos: 2,
        costo: 490000,
        smoke: true,
        pets: true
    },
    {
        nombre:'Hermosa Cabaña de Campo',
        src: './assets/img/arriendo5.jpg',
        descripcion: 'Se arrienda hermosa casa de campo ideal para retiro y vivir de la tranquilidad',
        ubicacion: 'Valle Escondido de Rinconada',
        habitaciones: 3,
        banos: 1,
        costo: 300000,
        smoke: false,
        pets: true
    },
    {
        nombre:'Hermosa Casa en pleno Centro de Santiago',
        src: './assets/img/arriendo6.jpg',
        descripcion: 'Gran casa disponible para ambiente familiar ubicada en barrio tranquilo de Santiago ideal para criar a sus hijos',
        ubicacion: 'La Dehesa',
        habitaciones: 5,
        banos: 4,
        costo: 1000000,
        smoke: true,
        pets: true
    }
]

const seccionVenta = document.querySelector('.ventaRow');
const seccionArriendo = document.querySelector('.arriendoRow');

function mostrarVenta(propiedadVenta){
    let contador = 0;
    let templateVenta = '';
    for(let llave in propiedadVenta){
        if(contador < 3){
            templateVenta += `
            <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedadVenta[llave].src}" class="card-img-top" alt="Imagen de la propiedad"/>
              <div class="card-body">
                <h5 class="card-title"> ${propiedadVenta[llave].nombre} </h5>
                <p class="card-text">${propiedadVenta[llave].descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadVenta[llave].ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadVenta[llave].habitaciones} Habitaciones | 
                <i class="fas fa-bath"></i> ${propiedadVenta[llave].banos} Baños </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadVenta[llave].costo}</p>`;
                if(propiedadVenta[llave].smoke == true){
                    templateVenta +=`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p></div>`;
                }else{
                    templateVenta +=`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
                }
                if(propiedadVenta[llave].pets == true){
                    templateVenta += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p></div></div></div>`;
                }else{
                    templateVenta +=`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p></div></div></div>`;
                }     
                contador++;     
        }
    }
    seccionVenta.innerHTML = templateVenta;
}
function mostrarArriendo(propiedadArriendo){
    let contador = 0;
    let templateArriendo = '';
    for(let llave in propiedadArriendo){
        if(contador < 3){
            templateArriendo += `
            <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedadArriendo[llave].src}" class="card-img-top" alt="Imagen de la propiedad"/>
              <div class="card-body">
                <h5 class="card-title"> ${propiedadArriendo[llave].nombre} </h5>
                <p class="card-text">${propiedadArriendo[llave].descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadArriendo[llave].ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadArriendo[llave].habitaciones} Habitaciones | 
                <i class="fas fa-bath"></i> ${propiedadArriendo[llave].banos} Baños </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadArriendo[llave].costo}</p>`;
                if(propiedadArriendo[llave].smoke == true){
                    templateArriendo +=`<p class="text-success"><i class="fas fa-smoking"></i>Permitido fumar</p></div>`;
                }else{
                    templateArriendo +=`<p class="text-danger"><i class="fas fa-smoking-ban"></i>No se permite fumar</p>`;
                }
                if(propiedadArriendo[llave].pets == true){
                    templateArriendo += `<p class="text-success"><i class="fas fa-paw"></i>Mascotas permitidas</p></div></div></div>`;
                }else{
                    templateArriendo +=`<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p></div></div></div>`;
                }     
                contador++;     
        }
    }
    seccionArriendo.innerHTML = templateArriendo;
}
mostrarVenta(propiedadVenta);
mostrarArriendo(propiedadArriendo);