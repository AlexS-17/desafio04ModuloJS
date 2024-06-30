const propiedades_alquiler = [
    {
    nombre: 'Departamento en el corazón de la ciudad',
    src: 'https://i.pinimg.com/564x/75/47/48/7547485c6126dd3e6d5290a611394179.jpg',
    descripcion: 'Este departamento de 2 habitaciones está ubicado en el centro de la ciudad.',
    ubicacion: '123 Main Street, Providencia, Santiago',
    habitaciones: 2,
    baños: 1,
    costo:  400000,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Departamento luminoso con vista al mar',
    src: 'https://i.pinimg.com/564x/cf/5f/19/cf5f1964ddbced71fa30f0a8f653f8bf.jpg',
    descripcion: 'Este hermoso departamento ofrece una vista impresionante al mar',
    ubicacion: '789 Mountain Road, Viña del Mar, Valparaíso',
    habitaciones: 3,
    baños: 1,
    costo:  500000,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://i.pinimg.com/564x/0f/04/25/0f0425512c78a55d40d0cb35f0a53c1a.jpg',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial en Santiago',
    ubicacion: '123 Main Street, La Reina, Santiago',
    habitaciones: 2,
    baños: 1,
    costo:  450000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Casa en Chicureo',
    src: 'https://i.pinimg.com/564x/de/3c/97/de3c97a8ca52ec15aca172d6bf552748.jpg',
    descripcion: 'Linda y amplia casa en Chicureo, con 3 habitaciones y 2 baños',
    ubicacion: 'El Remanso De Chicureo 123, Chicureo, Colina, RM',
    habitaciones: 3,
    baños: 2,
    costo:  500000,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Casa a las afueras de Concepción',
    src: 'https://i.pinimg.com/564x/cc/f0/80/ccf08009161bcb79551dbf6edd5cc3b4.jpg',
    descripcion: 'Esta casa tiene 6 habitaciones y 3 baños, se encuentra ubicada a 30 minutos al sur de Concepción',
    ubicacion: '123 Main Street, Talcahuano, Concepción',
    habitaciones: 6,
    baños: 3,
    costo:  700000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa en Colbún, cerca de la Laguna del Maule',
    src: 'https://i.pinimg.com/564x/81/26/04/812604628df826fb041263932bd380a2.jpg',
    descripcion: 'Esta casa se encuentra a 20 minutos de la Laguna del Maule y a 40 minutos de la ciudad de Linares',
    ubicacion: '123 Main Street, Colbún, Linares',
    habitaciones: 4,
    baños: 2,
    costo:  480000,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Departamento en Macúl',
    src: 'https://i.pinimg.com/564x/cc/8c/49/cc8c49762cb3bcb28f98a9e82f92c4a6.jpg',
    descripcion: 'Este departamento se encuentra ubicado en la comuna de Macúl, a pasos de la estación de metro Carlos Valdovinos',
    ubicacion: '123 Main Street, Macúl, Santiago',
    habitaciones: 2,
    baños: 1,
    costo:  400000,
    smoke: false,
    pets: false,
    }
    ]
const elemento = document.querySelector('.row');
let html='';
    for(let propiedad of propiedades_alquiler) {
        html+=
        `<div class="col-md-3 mb-3">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="foto de departamento con jardin"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
                <p class="${(propiedad.smoke) ? 'text-success' : 'text-danger'}">
                  <i class="${(propiedad.smoke) ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${(propiedad.smoke) ? 'Permitido fumar':'No se permite fumar'}
                </p>
                <p class="${(propiedad.pets) ? 'text-success':'text-danger'}">
                  <i class="${(propiedad.pets) ? 'fas fa-paw':'fa-solid fa-ban'}"></i> ${(propiedad.pets) ? 'Mascotas Permitidas':'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>`
    }
    elemento.innerHTML=html;
