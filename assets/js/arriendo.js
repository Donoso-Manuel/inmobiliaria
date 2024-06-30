const propiedadArriendo = [
    {
        nombre:'Lujosa Casa con Piscina',
        src: '../img/arriendo1.jpg',
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
        src: '../img/arriendo2.jpg',
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
        src: '../img/arriendo3.jpg',
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
        src: '../img/arriendo4.jpg',
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
        src: '../img/arriendo5.jpeg',
        descripcion: 'Se arrienda hermosa casa de campo ideal para retiro y vivir de la tranquilidad',
        ubicacion: 'Valle Escondido de Rinconada',
        habitaciones: 3,
        bano: 1,
        costo: 300000,
        smoke: false,
        pets: true
    },
    {
        nombre:'Hermosa Casa en pleno Centro de Santiago',
        src: '../img/arriendo6.jpg',
        descripcion: 'Gran casa disponible para ambiente familiar ubicada en barrio tranquilo de Santiago ideal para criar a sus hijos',
        ubicacion: 'La Dehesa',
        habitaciones: 5,
        banos: 4,
        costo: 1000000,
        smoke: true,
        pets: true
    }
]

const seccionArriendo = document.querySelector('.contenedorArriendos');

function mostrarArriendo(propiedadArriendo){
    let templateArriendo = '';
    for(let llave in propiedadArriendo){
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
        }
        seccionArriendo.innerHTML = templateArriendo;
    }

mostrarArriendo(propiedadArriendo);