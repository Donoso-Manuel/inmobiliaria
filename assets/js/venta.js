const propiedadVenta = [
    {
    nombre:'Apartamento de lujo en zona exclusiva',
    src: '../img/venta1.jpg',
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
    src: '../img/venta2.jpg',
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
    src: '../img/venta3.jpg',
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
    src: '../img/venta4.jpg',
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
    src: '../img/venta5.jpg',
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
    src: '../img/venta6.jpg',
    descripcion: 'Hermosa casa en condominio Don Aurelio en Calle Larga, con acceso a la avenida principal',
    ubicacion: 'Calle Larga, Los Andes, Region Valparaiso',
    habitaciones: 4,
    banos: 2,
    costo: 39000000,
    smoke: false,
    pets: false
}
]

const seccionVenta = document.querySelector('.contenedorVentas');

function mostrarVenta(propiedadVenta){
    let templateVenta = '';
    for(let llave in propiedadVenta){
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
        }
        seccionVenta.innerHTML = templateVenta;
    }
    mostrarVenta(propiedadVenta);